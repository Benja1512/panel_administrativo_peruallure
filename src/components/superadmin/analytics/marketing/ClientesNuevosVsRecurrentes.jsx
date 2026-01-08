import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/ClientesNuevosVsRecurrentes.css";

const data = [
    { mes: "Ene", nuevos: 320, recurrentes: 480 },
    { mes: "Feb", nuevos: 350, recurrentes: 520 },
    { mes: "Mar", nuevos: 410, recurrentes: 560 },
    { mes: "Abr", nuevos: 390, recurrentes: 590 },
    { mes: "May", nuevos: 450, recurrentes: 640 },
    { mes: "Jun", nuevos: 470, recurrentes: 710 },
];

const ClientesNuevosVsRecurrentes = () => {
    return (
        <SectionLayout
            title="👤 Clientes Nuevos vs Recurrentes"
            description="Comparativa mensual entre adquisición de nuevos clientes y recurrencia."
        >
            <div className="cnr-panel">
                <div className="cnr-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Nuevos (mes)</span>
                        <span className="kpi-value">470</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Recurrentes (mes)</span>
                        <span className="kpi-value positivo">710</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Ratio Recurrentes</span>
                        <span className="kpi-value positivo">60%</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Crecimiento Recurrentes</span>
                        <span className="kpi-value positivo">+11%</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="nuevos" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="recurrentes" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default ClientesNuevosVsRecurrentes;
