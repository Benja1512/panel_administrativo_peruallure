import React from "react";
import "../../../../../styles/facturacion/FacturacionPage.css";

const datosAnuales = [
    { year: 2021, total: 182000 },
    { year: 2022, total: 197500 },
    { year: 2023, total: 210300 },
    { year: 2024, total: 225900 },
    { year: 2025, total: 241800 },
];

const FacturacionAnual = () => {
    return (
        <div className="facturacion-bloque">
            <h2>📆 Facturación Anual (Últimos 5 años)</h2>
            <p>Evolución de ingresos históricos acumulados por año fiscal.</p>

            <table className="tabla-anual">
                <thead>
                <tr>
                    <th>Año</th>
                    <th>Total (USD)</th>
                </tr>
                </thead>
                <tbody>
                {datosAnuales.map((d, i) => (
                    <tr key={i}>
                        <td>{d.year}</td>
                        <td>USD {d.total.toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FacturacionAnual;
