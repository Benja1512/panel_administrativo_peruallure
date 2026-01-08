import React from "react";
import { Users } from "lucide-react";
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
import "../../../../styles/marketing/ComparativaVendedores.css";

const data = [
    { vendedor: "Juan Pérez", ventas: 45200, pedidos: 120 },
    { vendedor: "María López", ventas: 52800, pedidos: 138 },
    { vendedor: "Carlos Gómez", ventas: 61300, pedidos: 155 },
];

const ComparativaVendedores = () => {
    return (
        <SectionLayout
            title="🧍‍♂️🧍 Comparativa de Vendedores"
            description="Análisis del rendimiento, productividad y resultados por vendedor."
            icon={<Users size={20} />}
        >
            <div className="comparativa-panel">
                {/* KPIs */}
                <div className="comparativa-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Top Vendedor</span>
                        <span className="kpi-value positivo">Carlos Gómez</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Ventas Totales</span>
                        <span className="kpi-value">€159,300</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Pedidos Totales</span>
                        <span className="kpi-value">413</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Promedio por Vendedor</span>
                        <span className="kpi-value">€53,100</span>
                    </div>
                </div>

                {/* Gráfico */}
                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="vendedor" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="ventas" name="Ventas (€)" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="pedidos" name="Pedidos" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default ComparativaVendedores;
