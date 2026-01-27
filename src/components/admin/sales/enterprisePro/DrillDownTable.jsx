import { useMemo } from "react";
import { useDrillDown } from "./DrillDownProvider";
import { formatMoney } from "./money";

export default function DrillDownTable({ ventas = [], currency = "EUR" }) {
    const { drill, closeDrill } = useDrillDown();

    const filtered = useMemo(() => {
        if (!drill.open || !drill.filter) return [];
        const { field, value } = drill.filter;
        return ventas.filter((v) => String(v[field]) === String(value));
    }, [ventas, drill]);

    if (!drill.open) return null;

    return (
        <div className="pa-modal-backdrop" onClick={closeDrill}>
            <div className="pa-modal" onClick={(e) => e.stopPropagation()}>
                <div className="pa-modal-head">
                    <h3>{drill.title}</h3>
                    <button className="pa-btn" onClick={closeDrill}>Cerrar</button>
                </div>

                <div className="pa-table-wrap">
                    <table className="pa-table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Cliente</th>
                            <th>Canal</th>
                            <th>Estado</th>
                            <th style={{ textAlign: "right" }}>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filtered.map((v) => (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.fecha}</td>
                                <td>{v.cliente}</td>
                                <td>{v.canal}</td>
                                <td>{v.estado}</td>
                                <td style={{ textAlign: "right" }}>{formatMoney(v.totalConvertido ?? v.total, currency)}</td>
                            </tr>
                        ))}
                        {!filtered.length ? (
                            <tr><td colSpan="6" style={{ textAlign: "center", padding: 16 }}>Sin datos</td></tr>
                        ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
