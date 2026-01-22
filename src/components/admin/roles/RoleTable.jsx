import "../../../styles/admin/RoleTable.css";

export default function RoleTable({ roles }) {
    return (
        <table className="role-table">
            <thead>
            <tr>
                <th>Rol</th>
                <th>Permisos</th>
            </tr>
            </thead>
            <tbody>
            {roles.map((r) => (
                <tr key={r.id}>
                    <td>{r.nombre}</td>
                    <td>{r.permisos}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
