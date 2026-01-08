import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/SentimientoResenas.css";

const data = [
    { name: "Positivas", value: 62 },
    { name: "Neutras", value: 23 },
    { name: "Negativas", value: 15 },
];

const COLORS = ["#4ade80", "#facc15", "#f87171"];

const SentimientoResenas = () => {
    return (
        <SectionLayout
            title="⭐ Sentimiento de Reseñas"
            description="Análisis de reseñas positivas, neutras y negativas mediante NLP básico."
        >
            <div className="sentimiento-panel">
                <div className="sentimiento-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Sentimiento Positivo</span>
                        <span className="kpi-value positivo">62%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Reseñas Neutras</span>
                        <span className="kpi-value">23%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Sentimiento Negativo</span>
                        <span className="kpi-value negativo">15%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Score Global</span>
                        <span className="kpi-value">7.8 / 10</span>
                    </div>
                </div>

                <div className="sentimiento-grafico">
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

                <div className="sentimiento-insights">
                    <p>
                        📌 La mayoría de reseñas destacan <strong>rapidez de entrega</strong> y
                        <strong> calidad del producto</strong>.
                    </p>
                    <p>
                        ⚠️ Las reseñas negativas se concentran en <strong>tiempos de respuesta</strong>
                        y <strong>postventa</strong>.
                    </p>
                </div>
            </div>
        </SectionLayout>
    );
};

export default SentimientoResenas;
