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
import "../../../../styles/marketing/RentabilidadPorCanal.css";

const data = [
    { canal: "Web", ingresos: 52000, costos: 31000, margen: 40.4 },
    { canal: "Tienda", ingresos: 46000, costos: 29500, margen: 35.9 },
    { canal: "Externo", ingresos: 28000, costos: 19500, margen: 30.4 },
    { canal: "Mayorista", ingresos: 61000, costos: 47000, margen: 23.0 },
];

const RentabilidadPorCanal = () => {
    return (
        <SectionLayout
            title="💰 Rentabilidad por Canal"
            description="Comparativa entre canales como web, tienda, externo y mayoristas."
        >
            <div className="rentabilidad-panel">
                <div className="rentabilidad-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Canal más rentable</span>
                        <span className="kpi-value positivo">Web (40.4%)</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Mayor ingreso</span>
                        <span className="kpi-value">Mayorista (61,000)</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Menor margen</span>
                        <span className="kpi-value negativo">Mayorista (23.0%)</span>
                    </div>
                </div>

                <div className="chart-wrap">
                    <ResponsiveContainer width="100%" height={320}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="canal" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="ingresos" radius={[8, 8, 0, 0]} />
                            <Bar dataKey="costos" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="rentabilidad-tabla">
                    <div className="tabla-header">
                        <span>Canal</span>
                        <span>Ingresos</span>
                        <span>Costos</span>
                        <span>Margen</span>
                    </div>

                    {data.map((row) => (
                        <div className="tabla-row" key={row.canal}>
                            <span className="cell canal">{row.canal}</span>
                            <span className="cell">{row.ingresos.toLocaleString()}</span>
                            <span className="cell">{row.costos.toLocaleString()}</span>
                            <span className={`cell ${row.margen >= 35 ? "positivo" : row.margen <= 25 ? "negativo" : ""}`}>
                                {row.margen}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </SectionLayout>
    );
};

export default RentabilidadPorCanal;
