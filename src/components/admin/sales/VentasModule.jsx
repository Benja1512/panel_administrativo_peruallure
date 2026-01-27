import { useState, useEffect } from "react";

import VentasKPI from "./dashboard/VentasKPI";
import VentasChart from "./dashboard/VentasChart";
import VentasResumen from "./dashboard/VentasResumen";

import VentasTable from "./table/VentasTable";
import VentaDetalleModal from "./detail/VentaDetalleModal";

import VentasFilters from "./filters/VentasFilters";
import useVentasFilters from "./hooks/useVentasFilters";

import VentasPorCanalChart from "./analytics/VentasPorCanalChart";
import VentasPorCategoriaChart from "./analytics/VentasPorCategoriaChart";
import VentasDiariasChart from "./analytics/VentasDiariasChart";
import ComparacionMoMYoY from "./analytics/ComparacionMoMYoY";

import EnterpriseAnalytics from "./enterprise/EnterpriseAnalytics";

import ventasMock from "./utils/ventasMock";
import {
    loadVentas,
    saveVentas,
    updateVentaEstado
} from "./utils/ventasStorage";

import { exportCSV } from "./utils/exportVentas";

import { DrillDownProvider } from "./enterprisePro/DrillDownProvider";
import DrillDownTable from "./enterprisePro/DrillDownTable";

import "../../../styles/admin/sales/ventas-module.css";

export default function VentasModule() {
    const [ventaSeleccionada, setVentaSeleccionada] = useState(null);
    const [loading, setLoading] = useState(true);

    // =========================
    // ESTADO GLOBAL
    // =========================
    const [ventas, setVentas] = useState(() => {
        const stored = loadVentas();
        return stored.length ? stored : ventasMock;
    });

    // =========================
    // SIMULACIÓN DE CARGA
    // =========================
    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(t);
    }, []);

    // =========================
    // PERSISTENCIA
    // =========================
    useEffect(() => {
        if (!loading) saveVentas(ventas);
    }, [ventas, loading]);

    // =========================
    // FILTROS
    // =========================
    const { filters, setFilters, data } = useVentasFilters(ventas);

    // =========================
    // CAMBIO DE ESTADO
    // =========================
    const updateEstado = (venta, nuevoEstado) => {
        const updated = updateVentaEstado(venta.id, nuevoEstado);
        setVentas(updated);
    };

    return (
        <DrillDownProvider>
            <div className="ventas-module">

                {/* =====================
            NIVEL 1 — VISIÓN
        ====================== */}
                <VentasKPI />
                <VentasChart />
                <VentasResumen />

                {/* =====================
            NIVEL 2 — ANÁLISIS
        ====================== */}
                <div className="analytics-grid">
                    <VentasPorCanalChart ventas={data} />
                    <VentasPorCategoriaChart ventas={data} />
                    <VentasDiariasChart ventas={data} />
                    <ComparacionMoMYoY ventas={data} />
                </div>

                {/* =====================
            NIVEL 3 — ENTERPRISE
        ====================== */}
                <EnterpriseAnalytics ventas={data} />

                {/* =====================
            FILTROS
        ====================== */}
                <VentasFilters filters={filters} setFilters={setFilters} />

                {/* =====================
            ACCIONES
        ====================== */}
                <div className="ventas-toolbar">
                    <button
                        className="btn-export"
                        onClick={() => exportCSV(data)}
                    >
                        Exportar CSV
                    </button>

                    <span className="ventas-count">
            {data.length} pedidos
          </span>
                </div>

                {/* =====================
            NIVEL 4 — OPERATIVO
        ====================== */}
                <VentasTable
                    data={loading ? [] : data}
                    onView={setVentaSeleccionada}
                    onUpdateEstado={updateEstado}
                />

                {/* =====================
            NIVEL 5 — DETALLE
        ====================== */}
                <VentaDetalleModal
                    venta={ventaSeleccionada}
                    onClose={() => setVentaSeleccionada(null)}
                />

                {/* =====================
            DRILL-DOWN MODAL
        ====================== */}
                <DrillDownTable ventas={data} />

            </div>
        </DrillDownProvider>
    );
}
