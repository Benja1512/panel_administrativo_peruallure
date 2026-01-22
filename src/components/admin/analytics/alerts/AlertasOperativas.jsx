import React from "react";

import AlertasProductosCriticos from "./AlertasProductosCriticos";
import AlertasVentasAnomalas from "./AlertasVentasAnomalas";
import AlertasErroresSistema from "./AlertasErroresSistema";

import "../../../../styles/admin/analytics/alerts/alerts.css";

export default function AlertasOperativas() {
    return (
        <div className="alertas-operativas">
            <AlertasProductosCriticos />
            <AlertasVentasAnomalas />
            <AlertasErroresSistema />
        </div>
    );
}
