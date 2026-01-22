import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Completado", value: 320 },
    { name: "Pendiente", value: 85 },
    { name: "Cancelado", value: 25 },
];

const COLORS = ["#22c55e", "#f97316", "#ef4444"];

const PedidosPorEstadoChart = () => (
    <div className="chart-card">
        <h4>Pedidos por estado</h4>
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie data={data} dataKey="value" outerRadius={80} label>
                    {data.map((_, i) => (
                        <Cell key={i} fill={COLORS[i]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </div>
);

export default PedidosPorEstadoChart;
