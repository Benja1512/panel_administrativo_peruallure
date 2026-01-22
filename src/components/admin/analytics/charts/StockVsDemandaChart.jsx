import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { producto: "A", stock: 120, demanda: 140 },
    { producto: "B", stock: 80, demanda: 100 },
    { producto: "C", stock: 200, demanda: 180 },
];

const StockVsDemandaChart = () => (
    <div className="chart-card">
        <h4>Stock vs Demanda</h4>
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
                <XAxis dataKey="producto" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="stock" fill="#3b82f6" />
                <Bar dataKey="demanda" fill="#ef4444" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default StockVsDemandaChart;
