import React from "react";
import ComparativaVendedores from "../../../../components/superadmin/analytics/ComparativaVendedores";
import ValorPromedioPedido from "../../../../components/superadmin/analytics/ValorPromedioPedido";
import ProductividadVendedor from "../../../../components/superadmin/analytics/ProductividadVendedor";

const AnalyticsAvanzado = () => (
    <div className="analytics-page-container">
        <h1>🚀 Análisis Avanzado</h1>
        <ComparativaVendedores />
        <ValorPromedioPedido />
        <ProductividadVendedor />
    </div>
);

export default AnalyticsAvanzado;
