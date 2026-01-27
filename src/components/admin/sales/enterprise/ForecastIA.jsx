import React from "react";
import { TrendingUp, Euro } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../../../../styles/admin/sales/forecastIA.css";

const data = [
    { month: "Sep", value: 121000 },
    { month: "Oct", value: 124500 },
    { month: "Nov", value: 126800 },
    { month: "Dec", value: 128000 },
    { month: "Jan*", value: 138000 },
];

export default function ForecastIA() {
    return (
        <div className="card">
            <h3 className="title"><TrendingUp /> Forecast IA</h3>
            <p className="subtitle">Próximo mes: <b>€138,000 (+7.4%)</b></p>

            <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area dataKey="value" stroke="#0f172a" fill="#c7d2fe" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
