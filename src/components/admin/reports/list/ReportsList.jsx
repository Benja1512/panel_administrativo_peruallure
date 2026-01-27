import "../../../../styles/admin/reports/reports-list.css";

export default function ReportsList() {
    const reports = [
        { id: 1, name: "Ventas Enero 2026", type: "PDF", date: "2026-01-05" },
        { id: 2, name: "Inventario crítico", type: "Excel", date: "2026-01-10" },
        { id: 3, name: "Auditoría usuarios", type: "CSV", date: "2026-01-18" }
    ];

    return (
        <div className="reports-list">
            <h4>📄 Reportes generados</h4>

            <table>
                <thead>
                <tr>
                    <th>Reporte</th>
                    <th>Formato</th>
                    <th>Fecha</th>
                    <th>Acción</th>
                </tr>
                </thead>

                <tbody>
                {reports.map((r) => (
                    <tr key={r.id}>
                        <td>{r.name}</td>
                        <td>
                <span className={`type ${r.type.toLowerCase()}`}>
                  {r.type}
                </span>
                        </td>
                        <td>{r.date}</td>
                        <td>
                            <button className="btn-download">Descargar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
