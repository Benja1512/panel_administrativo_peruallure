import React from "react";

const TiempoPromedioEntrega = () => {
    return (
        <div className="analytics-page">
            <h1>Tiempo Promedio de Entrega</h1>
            <p>Indicador del tiempo medio que tarda un pedido en ser entregado.</p>

            <div className="kpi-grid">
                <div className="kpi">
                    <span className="kpi-label">Tiempo Promedio</span>
                    <span className="kpi-value">3.8 días</span>
                </div>

                <div className="kpi">
                    <span className="kpi-label">Mejor Tiempo</span>
                    <span className="kpi-value">2.1 días</span>
                </div>

                <div className="kpi">
                    <span className="kpi-label">Peor Tiempo</span>
                    <span className="kpi-value">6.4 días</span>
                </div>
            </div>
        </div>
    );
};

export default TiempoPromedioEntrega;
