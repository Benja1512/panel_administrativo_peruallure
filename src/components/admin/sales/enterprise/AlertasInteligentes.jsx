import React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function AlertasInteligentes() {
    const alertas = [
        { name: "Caída de ventas", active: true },
        { name: "Ticket bajo", active: true },
        { name: "Refund alto", active: false },
        { name: "Canal muerto", active: true },
    ];

    return (
        <div className="card">
            <h3 className="title">🚨 Alertas Inteligentes</h3>
            {alertas.map((a) => (
                <div key={a.name} className="alert-row">
                    {a.active ? <AlertTriangle color="red" /> : <CheckCircle color="green" />}
                    <span>{a.name}</span>
                </div>
            ))}
        </div>
    );
}
