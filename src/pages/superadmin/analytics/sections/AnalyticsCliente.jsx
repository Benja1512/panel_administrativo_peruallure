import React from "react";
import SatisfaccionCliente from "../../../../components/superadmin/analytics/marketing/SatisfaccionCliente";
import TasaRecompra from "../../../../components/superadmin/analytics/marketing/TasaRecompra";
import ChurnClientes from "../../../../components/superadmin/analytics/marketing/ChurnClientes";

const AnalyticsCliente = () => (
    <div className="analytics-page-container">
        <h1>😊 Análisis Cliente</h1>
        <SatisfaccionCliente />
        <TasaRecompra />
        <ChurnClientes />
    </div>
);

export default AnalyticsCliente;
