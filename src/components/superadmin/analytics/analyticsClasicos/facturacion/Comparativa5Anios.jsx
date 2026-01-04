import React from "react";
import "../../../styles/facturacion/Comparativa5Anios.css";

/* 📊 Facturación total por año */
const datos = [
    { año: "2020", monto: 52300 },
    { año: "2021", monto: 61900 },
    { año: "2022", monto: 75400 },
    { año: "2023", monto: 89700 },
    { año: "2024", monto: 103200 },
];

/* 🔁 Cálculo de variaciones automáticas */
const variaciones = datos.map((item, index) => {
    if (index === 0) return { ...item, variacion: null, diferencia: null };
    const diferencia = item.monto - datos[index - 1].monto;
    const variacion = ((diferencia / datos[index - 1].monto) * 100).toFixed(1);
    return { ...item, diferencia, variacion };
});

const Comparativa5Anios = () => {
    return (
        <div className="comp5-card">
            <h2>📆 Comparativa de Facturación (2020 → 2024)</h2>
            <p>Análisis del crecimiento anual durante los últimos 5 años.</p>

            <table className="comp5-table">
                <thead>
                <tr>
                    <th>Año</th>
                    <th>Total</th>
                    <th>Diferencia vs Año Anterior</th>
                    <th>Variación (%)</th>
                </tr>
                </thead>

                <tbody>
                {variaciones.map((v, i) => (
                    <tr key={i} className={v.diferencia < 0 ? "negativo" : "positivo"}>
                        <td>{v.año}</td>
                        <td>€{v.monto.toLocaleString("es-ES")}</td>
                        <td>{v.diferencia !== null ? `€${v.diferencia.toLocaleString("es-ES")}` : "—"}</td>
                        <td>{v.variacion !== null ? `${v.variacion}%` : "—"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Comparativa5Anios;
