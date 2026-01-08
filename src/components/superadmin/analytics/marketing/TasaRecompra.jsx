import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/TasaRecompra.css";

const data = [
    { mes: "Ene", tasa: 42 },
    { mes: "Feb", tasa: 45 },
    { mes: "Mar", tasa: 48 },
    { mes: "Abr", tasa: 47 },
    { mes: "May", tasa: 51 },
    { mes: "Jun", tasa: 54 },
];

const TasaRecompra = () => {
    return (
        <SectionLayout
            title="🔁 Tasa de Recompra"
            description="Porcentaje de clientes que realizan más de una compra en un periodo."
        >
            <div className="recompra-panel">
                <div className="recompra-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Tasa Actual</span>
                        <span className="kpi-value positivo">54%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Promedio 6 Meses</span>
                        <span className="kpi-value">47.8%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Variación Mensual</span>
                        <span className="kpi-value positivo">+3%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Clientes Recurrentes</span>
                        <span className="kpi-value">1,126</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="tasa"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default TasaRecompra;
