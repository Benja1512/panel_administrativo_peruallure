import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

import "../../../styles/ProductividadVendedor.css";

// 📊 Datos simulados por vendedor
const data = [
    { vendedor: "Lucía", ventas: 120 },
    { vendedor: "Carlos", ventas: 95 },
    { vendedor: "María", ventas: 140 },
    { vendedor: "Javier", ventas: 80 },
    { vendedor: "Andrea", ventas: 110 },
];

const ProductividadVendedor = () => {
    return (
        <div className="panel-card productividad-vendedor">
            <h2>🧑‍💼 Productividad por Vendedor</h2>
            <p>Comparación del rendimiento comercial por agente de ventas.</p>

            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="vendedor" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="ventas" fill="var(--primary)" radius={[6, 6, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProductividadVendedor;
