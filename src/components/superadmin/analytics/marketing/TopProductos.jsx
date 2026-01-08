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
import "../../../../styles/marketing/TopProductos.css";

const data = [
    { producto: "Producto A", ventas: 32500 },
    { producto: "Producto B", ventas: 28400 },
    { producto: "Producto C", ventas: 24100 },
    { producto: "Producto D", ventas: 19800 },
    { producto: "Producto E", ventas: 16200 },
];

const TopProductos = () => {
    return (
        <SectionLayout
            title="🏆 Top Productos"
            description="Ranking de productos con mayor volumen de ventas."
        >
            <div className="topproductos-panel">
                <div className="topproductos-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Producto Líder</span>
                        <span className="kpi-value positivo">Producto A</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Ventas Top 5</span>
                        <span className="kpi-value">€121,000</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Participación Top 1</span>
                        <span className="kpi-value">27%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Rotación Alta</span>
                        <span className="kpi-value positivo">Sí</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="producto" type="category" />
                        <Tooltip />
                        <Bar dataKey="ventas" radius={[0, 8, 8, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default TopProductos;
