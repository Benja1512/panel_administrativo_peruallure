import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Electrónica", value: 4200 },
    { name: "Moda", value: 3100 },
    { name: "Hogar", value: 2200 },
    { name: "Alimentos", value: 1800 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f97316", "#a855f7"];

const VentasPorCategoriaChart = () => (
    <div className="chart-card">
        <h4>Ventas por categoría</h4>
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie data={data} dataKey="value" outerRadius={80} label>
                    {data.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </div>
);

export default VentasPorCategoriaChart;
