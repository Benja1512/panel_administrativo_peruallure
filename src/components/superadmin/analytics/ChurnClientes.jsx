import React from "react";
import "../../../styles/ChurnClientes.css";

const ChurnClientes = () => {
    return (
        <div className="analytics-card">
            <h3>Tasa de Churn de Clientes</h3>
            <p>
                Analiza la tasa de abandono de clientes para anticipar riesgos
                y mejorar la retención.
            </p>
            <div className="analytics-placeholder">
                🔻 Indicador de Churn
            </div>
        </div>
    );
};

export default ChurnClientes;
