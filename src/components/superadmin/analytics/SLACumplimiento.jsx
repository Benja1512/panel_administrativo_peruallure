import React from "react";
import "../../../styles/SLACumplimiento.css";

const SLACumplimiento = () => {
    return (
        <div className="analytics-card">
            <h3>Cumplimiento de SLA</h3>
            <p>
                Mide el cumplimiento de acuerdos de nivel de servicio (SLA) en
                entregas y tiempos de atención.
            </p>
            <div className="analytics-placeholder">
                ⏱️ Indicador de SLA
            </div>
        </div>
    );
};

export default SLACumplimiento;
