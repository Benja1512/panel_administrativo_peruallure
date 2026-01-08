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
import "../../../../styles/marketing/CAC_CostoAdquisicionCliente.css";

const data = [
    { canal: "Google Ads", cac: 38 },
    { canal: "Meta Ads", cac: 42 },
    { canal: "Email", cac: 18 },
    { canal: "Orgánico", cac: 12 },
    { canal: "Referidos", cac: 15 },
];

const CAC_CostoAdquisicionCliente = () => {
    return (
        <SectionLayout
            title="💸 CAC – Costo de Adquisición de Cliente"
            description="Costo promedio invertido para adquirir un nuevo cliente por canal."
        >
            <div className="cac-panel">
                <div className="cac-kpis">
                    <div className="kpi">
                        <span className="kpi-label">CAC Promedio</span>
                        <span className="kpi-value">€25</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Canal Más Eficiente</span>
                        <span className="kpi-value positivo">Orgánico</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Canal Más Costoso</span>
                        <span className="kpi-value negativo">Meta Ads</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Variación Mensual</span>
                        <span className="kpi-value positivo">-6%</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="canal" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="cac" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default CAC_CostoAdquisicionCliente;
