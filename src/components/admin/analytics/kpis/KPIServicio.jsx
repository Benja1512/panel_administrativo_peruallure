import React from "react";
import "../../../../styles/admin/analytics/kpis/kpis.css";

const KPIServicio = () => (
    <div className="kpi-card dashboard-card">
        <h4>Servicio</h4>

        <p>
            Nivel de servicio: <b>96.4%</b>
        </p>

        <p>
            SLA cumplido: <b>92%</b>
        </p>

        <p>
            Pedidos a tiempo: <b>118 / 124</b>
        </p>

        <p>
            Reclamos abiertos: <b>3</b>
        </p>
    </div>
);

export default KPIServicio;
