import React from "react";
import "../../../../styles/admin/analytics/kpis/kpis.css";

const KPISeguridad = () => (
    <div className="kpi-card dashboard-card">
        <h4>Seguridad</h4>

        <p>
            Logins fallidos: <b>7</b>
        </p>

        <p>
            Roles modificados: <b>2</b>
        </p>

        <p>
            Usuarios bloqueados: <b>1</b>
        </p>
    </div>
);

export default KPISeguridad;
