import React from "react";
import "../../../styles/MRRmensual.css";

const MRRmensual = () => {
    return (
        <div className="kpi-card">
            <h4 className="kpi-title">MRR Mensual</h4>
            <span className="kpi-value">€ 128,450</span>
            <p className="kpi-description">
                Ingresos recurrentes mensuales del sistema
            </p>
        </div>
    );
};

export default MRRmensual;
