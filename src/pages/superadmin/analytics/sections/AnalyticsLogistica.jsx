import React from "react";
import InventarioActual from "../../../../components/superadmin/analytics/LogisticsAndSupply/inventario/InventarioActual";
import TiempoPromedioEntrega from "../../../../components/superadmin/analytics/TiempoPromedioEntrega";
import TiempoProcesamiento from "../../../../components/superadmin/analytics/TiempoProcesamiento";
import RotacionStock from "../../../../components/superadmin/analytics/RotacionStock";

const AnalyticsLogistica = () => (
    <div className="analytics-page-container">
        <h1>🚚 Logística & Supply Chain</h1>
        <InventarioActual />
        <TiempoPromedioEntrega />
        <TiempoProcesamiento />
        <RotacionStock />
    </div>
);

export default AnalyticsLogistica;
