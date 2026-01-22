import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { dia: "Lun", ventas: 1200 },
    { dia: "Mar", ventas: 1500 },
    { dia: "Mié", ventas: 1800 },
    { dia: "Jue", ventas: 1400 },
    { dia: "Vie", ventas: 2100 },
    { dia: "Sáb", ventas: 2600 },
    { dia: "Dom", ventas: 1900 },
];

const VentasPorDiaChart = () => (
    <div className="chart-card">
        <h4>Ventas por día</h4>
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ventas" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default VentasPorDiaChart;
