import React from "react";
import { AlertOctagon } from "lucide-react";
import "../../../../styles/admin/analytics/alerts/alerts.css";

const AlertasErroresSistema = () => (
    <div className="alert-card">
        <h4><AlertOctagon size={16} /> Errores de sistema</h4>
        <div className="alert-item">
            Fallo en sincronización de pedidos
        </div>
    </div>
);

export default AlertasErroresSistema;

