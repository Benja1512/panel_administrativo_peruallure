import React from "react";
import "../../../../styles/admin/users/usersActions.css";

export default function UsersQuickActions() {
    return (
        <div className="users-actions">
            <button className="btn-primary">+ Nuevo usuario</button>
            <button className="btn-secondary">Exportar</button>
            <button className="btn-danger">Bloquear</button>
        </div>
    );
}
