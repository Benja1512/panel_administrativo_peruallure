// src/pages/superadmin/analytics/analyticsClasicos/facturacion/FacturacionDiaria.jsx

import React from "react";
import ChartFacturacionDiaria from "../../../../../components/superadmin/analytics/analyticsClasicos/facturacion/ChartFacturacionDiaria";
import TablaFacturacionDiaria from "../../../../../components/superadmin/analytics/analyticsClasicos/facturacion/TablaFacturacionDiaria";

import  "../../../../../styles/facturacion/facturacionDiaria.css"

const FacturacionDiaria = () => {
    return (
        <div className="pagina-facturacion">
            <h2>📊 Facturación Diaria del Mes</h2>
            <ChartFacturacionDiaria />
            <TablaFacturacionDiaria />
        </div>
    );
};

export default FacturacionDiaria;
