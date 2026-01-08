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
import "../../../../styles/marketing/ClientesTopLTV.css";

const data = [
    { cliente: "Empresa Alpha", ltv: 12500 },
    { cliente: "Grupo Beta", ltv: 9800 },
    { cliente: "Cliente Gamma", ltv: 8600 },
    { cliente: "Distribuidor Delta", ltv: 7400 },
    { cliente: "Cliente Épsilon", ltv: 6900 },
];

const ClientesTopLTV = () => {
    return (
        <SectionLayout
            title="👑 Clientes Top LTV (Lifetime Value)"
            description="Clientes con mayor valor acumulado durante toda su relación con la empresa."
        >
            <div className="topltv-panel">
                <div className="topltv-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Cliente #1</span>
                        <span className="kpi-value positivo">Empresa Alpha</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">LTV Máximo</span>
                        <span className="kpi-value">€12,500</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Top 5 LTV</span>
                        <span className="kpi-value">€45,200</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Concentración</span>
                        <span className="kpi-value">61%</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={data} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="cliente" type="category" />
                        <Tooltip />
                        <Bar dataKey="ltv" radius={[0, 8, 8, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default ClientesTopLTV;
