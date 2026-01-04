import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
    { anio: "2019", total: 45800 },
    { anio: "2020", total: 52300 },
    { anio: "2021", total: 61900 },
    { anio: "2022", total: 75400 },
    { anio: "2023", total: 89700 },
    { anio: "2024", total: 103200 },
];

const FacturacionAnual = () => {
    return (
        <div className="card-analytics">
            <h3>📆 Facturación Anual (Últimos 6 Años)</h3>
            <p>Resumen histórico de crecimiento anual de ingresos.</p>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="anio" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`€ ${value.toLocaleString()}`, "Total"]} />
                    <Legend />
                    <Bar dataKey="total" fill="#4caf50" name="Facturación (€)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FacturacionAnual;
