import React from "react";
import InventarioActual from "../../../../components/superadmin/analytics/LogisticsAndSupply/inventario/InventarioActual";
import TiempoProcesamiento from "../../../../components/superadmin/analytics/LogisticsAndSupply/procesamiento/TiempoProcesamiento";
import RotacionStock from "../../../../components/superadmin/analytics/LogisticsAndSupply/stock/RotacionStock";


const AnalyticsLogistica = () => (
    <div className="analytics-page-container">
        <h1>🚚 Logística & Supply Chain</h1>
        <InventarioActual />
        <TiempoProcesamiento />
        <RotacionStock />
    </div>
);

export default AnalyticsLogistica;
