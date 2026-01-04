import React from "react";
import PrediccionVentas from "../../../../components/superadmin/analytics/analyticsIA/PrediccionVentas";
import DesviacionForecast from "../../../../components/superadmin/analytics/analyticsIA/DesviacionForecast";
import ForecastStockCritico from "../../../../components/superadmin/analytics/ForecastStockCritico";

const AnalyticsIA = () => (
    <div className="analytics-page-container">
        <h1>🧠 Predicción & IA</h1>
        <PrediccionVentas />
        <DesviacionForecast />
        <ForecastStockCritico />
    </div>
);

export default AnalyticsIA;
