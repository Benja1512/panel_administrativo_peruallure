import React from "react";
import KPIs from "../../../../components/superadmin/analytics/KPIs";
import FacturacionMensual from "../../../../components/superadmin/analytics/FacturacionMensual";
import MRRmensual from "../../../../components/superadmin/analytics/MRRmensual";
import TopProductos from "../../../../components/superadmin/analytics/TopProductos";

const AnalyticsClasicos = () => (
    <div className="analytics-page-container">
        <h1>📊 Indicadores Clásicos</h1>
        <KPIs />
        <FacturacionMensual />
        <MRRmensual />
        <TopProductos />
    </div>
);

export default AnalyticsClasicos;
