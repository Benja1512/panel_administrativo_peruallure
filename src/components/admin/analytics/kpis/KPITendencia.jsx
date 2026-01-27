import React from "react";
import "../../../../styles/admin/analytics/kpis/kpis.css";

const KPITendencia = () => (
    <div className="kpi-card dashboard-card">
        <h4>Tendencia</h4>

        <p>
            Pedidos: <span className="kpi-green">↑ 12%</span>
        </p>

        <p>
            Errores: <span className="kpi-red">↓ 30%</span>
        </p>

        <p>
            Stock crítico: <span className="kpi-orange">↑ 2</span>
        </p>
    </div>
);

export default KPITendencia;
