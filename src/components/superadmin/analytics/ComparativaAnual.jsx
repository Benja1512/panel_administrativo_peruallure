import React from "react";
import "../../../styles/facturacion/ComparativaAnual.css";

const datos = [
    { año: 2020, total: 52300 },
    { año: 2021, total: 61900 },
    { año: 2022, total: 75400 },
    { año: 2023, total: 89700 },
    { año: 2024, total: 103200 },
];

const ComparativaAnual = () => {
    return (
        <div className="comparativa-card">
            <h2>🚀 Comparativa Año vs Año (2020 → 2024)</h2>
            <p className="subtext">
                Evolución anual, crecimiento interanual y variación porcentual del negocio.
            </p>

            <table className="comparativa-tabla">
                <thead>
                <tr>
                    <th>Año</th>
                    <th>Total</th>
                    <th>Diferencia vs Año Anterior</th>
                    <th>Variación %</th>
                </tr>
                </thead>
                <tbody>
                {datos.map((item, index) => {
                    const prev = datos[index - 1];
                    const diferencia = prev ? item.total - prev.total : null;
                    const variacion = prev
                        ? ((diferencia / prev.total) * 100).toFixed(1)
                        : null;

                    return (
                        <tr
                            key={item.año}
                            className={index === datos.length - 1 ? "destacado" : ""}
                        >
                            <td>{item.año}</td>
                            <td>USD {item.total.toLocaleString()}</td>
                            <td>{diferencia ? `USD ${diferencia.toLocaleString()}` : "—"}</td>
                            <td>{variacion ? `${variacion}%` : "—"}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default ComparativaAnual;
