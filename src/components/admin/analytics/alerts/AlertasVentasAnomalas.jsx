import React from "react";
import { TrendingDown } from "lucide-react";
import "../../../../styles/admin/analytics/alerts/alerts.css";

const AlertasVentasAnomalas = () => (
    <div className="alert-card">
        <h4><TrendingDown size={16} /> Ventas anómalas</h4>
        <div className="alert-item">
            Caída del 35% en categoría Electrónica
        </div>
    </div>
);

export default AlertasVentasAnomalas;
