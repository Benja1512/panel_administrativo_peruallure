import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/SegmentosClientes.css";

const data = [
    { name: "Recurrentes", value: 38 },
    { name: "Ocasionales", value: 27 },
    { name: "Mayoristas", value: 18 },
    { name: "VIP", value: 17 },
];

const COLORS = ["#38bdf8", "#facc15", "#a78bfa", "#4ade80"];

const SegmentosClientes = () => {
    return (
        <SectionLayout
            title="👥 Segmentos de Clientes"
            description="Clasificación por perfiles: recurrentes, mayorista, ocasional y VIP."
        >
            <div className="segmentos-panel">
                <div className="segmentos-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Segmento Dominante</span>
                        <span className="kpi-value">Recurrentes</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Clientes VIP</span>
                        <span className="kpi-value positivo">17%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Mayoristas</span>
                        <span className="kpi-value">18%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Ocasionales</span>
                        <span className="kpi-value negativo">27%</span>
                    </div>
                </div>

                <div className="segmentos-grafico">
                    <ResponsiveContainer width="100%" height={280}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={70}
                                outerRadius={105}
                            >
                                {data.map((_, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </SectionLayout>
    );
};

export default SegmentosClientes;
