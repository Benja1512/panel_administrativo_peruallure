import "../../../styles/admin/UserLogsTable.css";

export default function UserLogsTable({ logs = [] }) {
    return (
        <table className="logs-table">
            <thead>
            <tr>
                <th>Usuario</th>
                <th>Acción</th>
                <th>Módulo</th>
                <th>Fecha</th>
                <th>IP</th>
            </tr>
            </thead>
            <tbody>
            {logs.length === 0 ? (
                <tr>
                    <td colSpan="5" className="empty">
                        No hay logs registrados
                    </td>
                </tr>
            ) : (
                logs.map((log) => (
                    <tr key={log.id}>
                        <td>{log.usuario}</td>
                        <td>{log.accion}</td>
                        <td>{log.modulo}</td>
                        <td>{log.fecha}</td>
                        <td>{log.ip}</td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    );
}
