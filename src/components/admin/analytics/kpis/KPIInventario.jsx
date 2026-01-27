import React from "react";
import "../../../../styles/admin/analytics/kpis/kpis.css";

const KPIInventario = () => (
    <div className="kpi-card dashboard-card">
        <h4>Inventario</h4>

        <p>
            Stock disponible: <b>1,240 uds</b>
        </p>

        <p>
            Días de cobertura: <b>12 días</b>
        </p>

        <p>
            Quiebres de stock: <b>2</b>
        </p>

        <p>
            Sobrestock: <b>1 producto</b>
        </p>
    </div>
);

export default KPIInventario;
