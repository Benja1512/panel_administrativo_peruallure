import React from "react";
import "../../../../styles/admin/users/usersPermissions.css";

export default function UsersPermissionsPreview() {
    return (
        <div className="dashboard-card">
            <h4>Permisos activos</h4>
            <ul>
                <li>✔ Crear usuarios</li>
                <li>✔ Editar roles</li>
                <li>✔ Ver auditoría</li>
                <li>✖ Eliminar admins</li>
            </ul>
        </div>
    );
}
