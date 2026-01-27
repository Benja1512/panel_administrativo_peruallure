import { useMemo, useState } from "react";
import { exportExcelCSV } from "./exports/exportExcel";
import { exportVentasPDF } from "./exports/exportPDF";
import "./enterprisePro.css";

export default function EnterpriseProToolbar({
                                                 role = "admin",
                                                 ventas = [],
                                                 storeId, setStoreId,
                                                 currency, setCurrency,
                                                 darkMode, setDarkMode,
                                                 autoRefresh, setAutoRefresh,
                                                 refreshEverySec, setRefreshEverySec,
                                                 views, activeViewId, setActiveViewId,
                                                 saveView, deleteView,
                                             }) {
    const [viewName, setViewName] = useState("");

    const stores = useMemo(() => ["ALL", "LIMA", "AREQUIPA", "TRUJILLO"], []);
    const currencies = useMemo(() => ["EUR", "USD", "PEN"], []);

    return (
        <div className="pa-toolbar">
            <div className="pa-toolbar-left">
                <select className="pa-select" value={storeId} onChange={(e) => setStoreId(e.target.value)}>
                    {stores.map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <select className="pa-select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <label className="pa-toggle">
                    <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
                    <span>Dark</span>
                </label>

                <label className="pa-toggle">
                    <input type="checkbox" checked={autoRefresh} onChange={(e) => setAutoRefresh(e.target.checked)} />
                    <span>Auto</span>
                </label>

                <input
                    className="pa-input"
                    type="number"
                    min="5"
                    max="120"
                    value={refreshEverySec}
                    onChange={(e) => setRefreshEverySec(Number(e.target.value))}
                    title="Auto refresh (segundos)"
                />
            </div>

            <div className="pa-toolbar-right">
                <button className="pa-btn" onClick={() => exportExcelCSV(ventas)}>Excel</button>
                <button className="pa-btn" onClick={() => exportVentasPDF(ventas)}>PDF</button>

                <select className="pa-select" value={activeViewId || ""} onChange={(e) => setActiveViewId(e.target.value || null)}>
                    <option value="">Sin vista</option>
                    {views.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                </select>

                <input
                    className="pa-input"
                    value={viewName}
                    onChange={(e) => setViewName(e.target.value)}
                    placeholder="Nombre vista"
                />
                <button
                    className="pa-btn pa-btn-primary"
                    onClick={() => {
                        saveView({
                            name: viewName || "Mi vista",
                            storeId,
                            currency,
                            darkMode,
                        });
                        setViewName("");
                    }}
                >
                    Guardar vista
                </button>

                {activeViewId ? (
                    <button className="pa-btn pa-btn-danger" onClick={() => deleteView(activeViewId)}>
                        Borrar vista
                    </button>
                ) : null}
            </div>
        </div>
    );
}
