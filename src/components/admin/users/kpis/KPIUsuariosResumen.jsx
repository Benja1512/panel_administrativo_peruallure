import React from "react";
import "../../../../styles/admin/users/usersKpis.css";

export default function KPIUsuariosResumen() {
    return (
        <div className="dashboard-card users-kpi">
            <h4>Usuarios</h4>
            <p><strong>Activos:</strong> 86</p>
            <p><strong>Administradores:</strong> 2</p>
            <p><strong>Bloqueados:</strong> 1</p>
            <p><strong>Nuevos hoy:</strong> 3</p>
        </div>
    );
}
