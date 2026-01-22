import "./UserAuditTable.css";

export default function UserAuditTable({ data = [] }) {
    return (
        <table className="audit-table">
            <thead>
            <tr>
                <th>Usuario</th>
                <th>Acción</th>
                <th>Fecha</th>
                <th>IP</th>
            </tr>
            </thead>
            <tbody>
            {data.length === 0 ? (
                <tr>
                    <td colSpan="4" className="empty">
                        No hay registros de auditoría
                    </td>
                </tr>
            ) : (
                data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.usuario}</td>
                        <td>{row.accion}</td>
                        <td>{row.fecha}</td>
                        <td>{row.ip}</td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    );
}
