import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/ChurnClientes.css";

const data = [
    { mes: "Ene", churn: 4.2 },
    { mes: "Feb", churn: 3.8 },
    { mes: "Mar", churn: 5.1 },
    { mes: "Abr", churn: 4.5 },
    { mes: "May", churn: 3.9 },
    { mes: "Jun", churn: 3.2 },
];

const ChurnClientes = () => {
    return (
        <SectionLayout
            title="🔁 Churn de Clientes"
            description="Porcentaje de clientes que abandonan la empresa en cada periodo."
        >
            <div className="churn-kpis">
                <div className="churn-card">
                    <span className="label">Churn actual</span>
                    <span className="value danger">3.2%</span>
                </div>

                <div className="churn-card">
                    <span className="label">Promedio 6 meses</span>
                    <span className="value">4.1%</span>
                </div>

                <div className="churn-card">
                    <span className="label">Clientes perdidos</span>
                    <span className="value">48</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis unit="%" />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Line
                        type="monotone"
                        dataKey="churn"
                        stroke="#ef4444"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>

            <p className="churn-insight">
                📉 La tendencia indica una reducción progresiva del churn, lo que
                refleja mejoras en retención y satisfacción del cliente.
            </p>
        </SectionLayout>
    );
};

export default ChurnClientes;
