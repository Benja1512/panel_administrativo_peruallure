import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/SatisfaccionCliente.css";

const data = [
    { nivel: "Muy Satisfecho", valor: 52 },
    { nivel: "Satisfecho", valor: 31 },
    { nivel: "Neutral", valor: 9 },
    { nivel: "Insatisfecho", valor: 5 },
    { nivel: "Muy Insatisfecho", valor: 3 },
];

const SatisfaccionCliente = () => {
    return (
        <SectionLayout
            title="😊 Satisfacción del Cliente"
            description="Medición de calidad percibida, devoluciones y experiencia post-compra."
        >
            <div className="satisfaccion-panel">
                <div className="satisfaccion-kpis">
                    <div className="kpi">
                        <span className="kpi-label">CSAT</span>
                        <span className="kpi-value positivo">83%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">NPS</span>
                        <span className="kpi-value">+46</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Tasa Devolución</span>
                        <span className="kpi-value negativo">4.8%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Rating Promedio</span>
                        <span className="kpi-value">4.3 ★</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="nivel" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="valor" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default SatisfaccionCliente;
