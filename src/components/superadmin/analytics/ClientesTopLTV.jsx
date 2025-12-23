import React from "react";
import "../../../styles/ClientesTopLTV.css";

const ClientesTopLTV = () => {
    return (
        <div className="analytics-card">
            <h3>Clientes con Mayor LTV</h3>
            <p>
                Identifica los clientes con mayor valor de vida (Lifetime Value),
                permitiendo enfocar estrategias de retención y fidelización.
            </p>
            <div className="analytics-placeholder">
                📊 Gráfico Top Clientes por LTV
            </div>
        </div>
    );
};

export default ClientesTopLTV;
