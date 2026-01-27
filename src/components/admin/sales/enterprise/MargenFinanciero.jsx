import React from "react";
import { Euro, Percent } from "lucide-react";
import "../../../../styles/admin/sales/margenFinanciero.css";

export default function MargenFinanciero() {
    const ventas = 128000;
    const coste = 84000;
    const margen = ventas - coste;
    const margenPct = ((margen / ventas) * 100).toFixed(1);

    return (
        <div className="card">
            <h3 className="title">📊 Margen</h3>

            <div className="kpis">
                <div>Ventas: €{ventas.toLocaleString()}</div>
                <div>Coste: €{coste.toLocaleString()}</div>
                <div><b>Margen: {margenPct}%</b></div>
            </div>
        </div>
    );
}
