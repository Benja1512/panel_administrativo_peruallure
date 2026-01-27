import { useEffect, useMemo, useState } from "react";
import useEnterprisePro from "./useEnterprisePro";
import { convert } from "./money";
import { DrillDownProvider } from "./DrillDownProvider";
import DrillDownTable from "./DrillDownTable";
import EnterpriseProToolbar from "./EnterpriseProToolbar";
import "../../../../styles/admin/sales/enterprisePro.css";


/**
 * ✅ Este “kit” NO reemplaza tu módulo.
 * Solo añade: multi-tienda, multi-moneda, dark, vistas, exports,
 * auto refresh y websockets + drilldown table.
 */
export default function EnterpriseProKit({ ventas = [], role = "admin" }) {
    const pro = useEnterprisePro({ defaultStore: "ALL", defaultCurrency: "EUR" });
    const [liveVentas, setLiveVentas] = useState(ventas);

    // Aplicar vista activa (si existe)
    useEffect(() => {
        if (!pro.activeView) return;
        pro.setStoreId(pro.activeView.storeId ?? "ALL");
        pro.setCurrency(pro.activeView.currency ?? "EUR");
        pro.setDarkMode(!!pro.activeView.darkMode);
    }, [pro.activeViewId]); // eslint-disable-line

    // Multi-tienda (filtra)
    const filteredByStore = useMemo(() => {
        if (pro.storeId === "ALL") return liveVentas;
        return liveVentas.filter(v => String(v.storeId || "LIMA") === String(pro.storeId));
    }, [liveVentas, pro.storeId]);

    // Multi-moneda (convierte)
    const converted = useMemo(() => {
        return filteredByStore.map(v => ({
            ...v,
            totalConvertido: convert(Number(v.total || 0), pro.currency),
        }));
    }, [filteredByStore, pro.currency]);

    // Auto refresh “pull” (simulado: tú conectas tu fetch real aquí)
    useEffect(() => {
        if (!pro.autoRefresh) return;
        const t = setInterval(() => {
            // 🔌 aquí iría tu fetch al backend:
            // fetchVentas().then(setLiveVentas)
            // por ahora mantenemos el estado actual
            setLiveVentas(prev => [...prev]);
        }, Math.max(5, pro.refreshEverySec) * 1000);

        return () => clearInterval(t);
    }, [pro.autoRefresh, pro.refreshEverySec]);

    // WebSockets (real time)
    useEffect(() => {
        // 🔌 Pon tu URL real cuando tengas backend:
        // const ws = new WebSocket("wss://tu-dominio/ws/ventas");
        // TEMP: ejemplo local
        const wsUrl = "ws://localhost:8080/ws/ventas";
        let ws;

        try {
            ws = new WebSocket(wsUrl);

            ws.onmessage = (evt) => {
                // Espera algo como: { type:"venta_nueva", payload:{...venta} }
                const msg = JSON.parse(evt.data);

                if (msg.type === "venta_nueva") {
                    setLiveVentas((prev) => [msg.payload, ...prev]);
                }

                if (msg.type === "venta_update") {
                    setLiveVentas((prev) =>
                        prev.map((v) => (v.id === msg.payload.id ? { ...v, ...msg.payload } : v))
                    );
                }
            };

            ws.onerror = () => {
                // Si no hay servidor WS, no rompas UI
            };
        } catch {
            // sin WS
        }

        return () => {
            if (ws && ws.readyState === 1) ws.close();
        };
    }, []);

    return (
        <DrillDownProvider>
            <div className="pa-pro-wrap">
                <EnterpriseProToolbar
                    role={role}
                    ventas={converted}
                    {...pro}
                />

                {/* Drill-down Table modal */}
                <DrillDownTable ventas={converted} currency={pro.currency} />
            </div>
        </DrillDownProvider>
    );
}
