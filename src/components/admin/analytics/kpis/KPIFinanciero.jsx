import React from "react";
import "../../../../styles/admin/analytics/kpis/kpis.css";

const KPIFinanciero = () => (
    <div className="kpi-card dashboard-card">
        <h4>Finanzas</h4>

        <p>
            Ventas del día: <b>€2,430</b>
        </p>

        <p>
            Ingresos del mes: <b>€48,200</b>
        </p>

        <p>
            Margen: <b>32%</b>
        </p>

        <p>
            Ticket promedio: <b>€38</b>
        </p>
    </div>
);

export default KPIFinanciero;
