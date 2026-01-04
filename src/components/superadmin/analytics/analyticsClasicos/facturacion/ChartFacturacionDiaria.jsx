import React from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
    { dia: "Día 1", total: 320 }, { dia: "Día 2", total: 410 }, { dia: "Día 3", total: 380 },
    { dia: "Día 4", total: 450 }, { dia: "Día 5", total: 520 }, { dia: "Día 6", total: 470 },
    { dia: "Día 7", total: 610 }, { dia: "Día 8", total: 590 }, { dia: "Día 9", total: 650 },
    { dia: "Día 10", total: 720 }, { dia: "Día 11", total: 685 }, { dia: "Día 12", total: 740 },
    { dia: "Día 13", total: 810 }, { dia: "Día 14", total: 780 }, { dia: "Día 15", total: 850 },
    { dia: "Día 16", total: 910 }, { dia: "Día 17", total: 890 }, { dia: "Día 18", total: 940 },
    { dia: "Día 19", total: 1020 }, { dia: "Día 20", total: 1110 }, { dia: "Día 21", total: 960 },
    { dia: "Día 22", total: 880 }, { dia: "Día 23", total: 840 }, { dia: "Día 24", total: 970 },
    { dia: "Día 25", total: 1050 }, { dia: "Día 26", total: 1120 }, { dia: "Día 27", total: 1090 },
    { dia: "Día 28", total: 1180 }, { dia: "Día 29", total: 1210 }, { dia: "Día 30", total: 1300 }
];

const ChartFacturacionDiaria = () => {
    return (
        <div className="card-analytics">
            <h3>📈 Ventas Diarias - Gráfico</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dia" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Total"]} />
                    <Line type="monotone" dataKey="total" stroke="#2196f3" name="Ventas por día" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartFacturacionDiaria;
