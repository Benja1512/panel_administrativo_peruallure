import React from "react";
import "../../../styles/AnalyticsClasicos.css";


const KPIs = () => {
    return (
        <div className="kpi-grid">
            <div className="kpi-card">
                <h3>📈 Ventas Totales</h3>
                <p>USD 120,450</p>
            </div>

            <div className="kpi-card">
                <h3>♻️ Retención de Clientes</h3>
                <p>87%</p>
            </div>

            <div className="kpi-card">
                <h3>🔁 Conversión</h3>
                <p>4.2%</p>
            </div>

            <div className="kpi-card">
                <h3>🎯 Ticket Promedio</h3>
                <p>USD 57.90</p>
            </div>
        </div>
    );
};

export default KPIs;
