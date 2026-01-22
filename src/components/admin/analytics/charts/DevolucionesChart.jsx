import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { mes: "Ene", devoluciones: 12 },
    { mes: "Feb", devoluciones: 18 },
    { mes: "Mar", devoluciones: 9 },
    { mes: "Abr", devoluciones: 14 },
    { mes: "May", devoluciones: 6 },
];

const DevolucionesChart = () => (
    <div className="chart-card">
        <h4>Devoluciones</h4>
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="devoluciones" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default DevolucionesChart;
