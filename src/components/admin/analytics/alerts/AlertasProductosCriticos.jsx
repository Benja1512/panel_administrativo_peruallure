import React from "react";
import { AlertTriangle } from "lucide-react";
import "../../../../styles/admin/analytics/alerts/alerts.css";

const data = [
    { producto: "Leche 1L", nivel: "Crítico", stock: 3 },
    { producto: "Arroz 5kg", nivel: "Bajo", stock: 8 },
];

const AlertasProductosCriticos = () => (
    <div className="alert-card">
        <h4><AlertTriangle size={16} /> Productos críticos</h4>
        {data.map((p, i) => (
            <div key={i} className="alert-item">
                {p.producto} – {p.stock} uds
            </div>
        ))}
    </div>
);

export default AlertasProductosCriticos;
