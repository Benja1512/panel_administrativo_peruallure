import React from "react";
import "../../../../styles/admin/reports/reports-history.css";

export default function ReportsHistory() {
    const history = [
        {
            id: 1,
            name: "Ventas Enero 2026",
            type: "PDF",
            date: "2026-01-05"
        },
        {
            id: 2,
            name: "Inventario crítico",
            type: "Excel",
            date: "2026-01-10"
        },
        {
            id: 3,
            name: "Auditoría usuarios",
            type: "CSV",
            date: "2026-01-18"
        }
    ];

    return (
        <div className="reports-history">
            <h4>📜 Historial de reportes generados</h4>

            <ul>
                {history.map((item) => (
                    <li key={item.id}>
                        <span className="report-name">{item.name}</span>
                        <span className={`report-type ${item.type.toLowerCase()}`}>
              {item.type}
            </span>
                        <span className="report-date">{item.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
