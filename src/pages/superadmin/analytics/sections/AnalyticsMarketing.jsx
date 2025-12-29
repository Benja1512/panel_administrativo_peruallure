import React from "react";
import CalendarioCampanias from "../../../../components/superadmin/analytics/CalendarioCampanias";
import ROIcampanias from "../../../../components/superadmin/analytics/ROIcampanias";
import CAC_CostoAdquisicionCliente from "../../../../components/superadmin/analytics/CAC_CostoAdquisicionCliente";

const AnalyticsMarketing = () => (
    <div className="analytics-page-container">
        <h1>📣 Marketing & Campañas</h1>
        <CalendarioCampanias />
        <ROIcampanias />
        <CAC_CostoAdquisicionCliente />
    </div>
);

export default AnalyticsMarketing;
