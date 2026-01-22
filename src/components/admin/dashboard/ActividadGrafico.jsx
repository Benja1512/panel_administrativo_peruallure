import React from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";
import "../../../styles/admin/dashboard//ActividadGrafico.css";

const data = [
    { dia: "Lun", logins: 34, errores: 2, registros: 5 },
    { dia: "Mar", logins: 45, errores: 5, registros: 8 },
    { dia: "Mié", logins: 40, errores: 1, registros: 6 },
    { dia: "Jue", logins: 55, errores: 3, registros: 10 },
    { dia: "Vie", logins: 62, errores: 7, registros: 14 },
    { dia: "Sáb", logins: 28, errores: 1, registros: 2 },
    { dia: "Dom", logins: 20, errores: 0, registros: 1 },
];

export default function ActividadGrafico() {
    return (
        <div className="grafico-card">
            <h3>Actividad del sistema</h3>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dia" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="logins" stroke="#22c55e" strokeWidth={2} />
                    <Line type="monotone" dataKey="errores" stroke="#ef4444" strokeWidth={2} />
                    <Line type="monotone" dataKey="registros" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
