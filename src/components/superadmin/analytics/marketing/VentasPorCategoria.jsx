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
import "../../../../styles/marketing/VentasPorCategoria.css";

const data = [
    { categoria: "Electrónica", ventas: 48500 },
    { categoria: "Hogar", ventas: 36200 },
    { categoria: "Moda", ventas: 29800 },
    { categoria: "Deportes", ventas: 21400 },
    { categoria: "Otros", ventas: 12700 },
];

const VentasPorCategoria = () => {
    return (
        <SectionLayout
            title="📦 Ventas por Categoría"
            description="Comparativa de ventas agrupadas por familia de productos."
        >
            <div className="categoria-panel">
                <div className="categoria-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Categoría Top</span>
                        <span className="kpi-value positivo">Electrónica</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Ventas Totales</span>
                        <span className="kpi-value">€149,600</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Categorías Activas</span>
                        <span className="kpi-value">5</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Concentración Top 2</span>
                        <span className="kpi-value">57%</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="categoria" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="ventas" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default VentasPorCategoria;
