import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/CohortesRecompra.css";

const data = [
    { mes: "Mes 1", c2024: 100, c2025: 100 },
    { mes: "Mes 2", c2024: 72, c2025: 78 },
    { mes: "Mes 3", c2024: 58, c2025: 64 },
    { mes: "Mes 4", c2024: 46, c2025: 55 },
    { mes: "Mes 5", c2024: 39, c2025: 48 },
    { mes: "Mes 6", c2024: 32, c2025: 42 },
];

const CohortesRecompra = () => {
    return (
        <SectionLayout
            title="📊 Cohortes de Recompra"
            description="Evolución de recompra por cohorte de clientes en el tiempo."
        >
            <div className="cohorte-panel">
                <div className="cohorte-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Retención Mes 6</span>
                        <span className="kpi-value positivo">42%</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Mejor Cohorte</span>
                        <span className="kpi-value">2025</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Caída Inicial</span>
                        <span className="kpi-value negativo">-22%</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="c2024" strokeWidth={3} name="Cohorte 2024" />
                        <Line type="monotone" dataKey="c2025" strokeWidth={3} name="Cohorte 2025" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default CohortesRecompra;
