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
import { Repeat } from "lucide-react";
import "../../../../styles/marketing/FrecuenciaCompraPromedio.css";

const data = [
    { segmento: "Clientes Nuevos", compras: 1.3 },
    { segmento: "Clientes Activos", compras: 3.8 },
    { segmento: "Clientes Fieles", compras: 6.1 },
];

const FrecuenciaCompraPromedio = () => {
    return (
        <SectionLayout
            title="Frecuencia de Compra Promedio"
            description="Número medio de compras repetidas por cliente en un período determinado."
            icon={<Repeat size={18} />}
        >
            <div className="frecuencia-container">
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="segmento" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="compras" radius={[6, 6, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>

                <div className="frecuencia-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Promedio General</span>
                        <span className="kpi-value">3.7</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Clientes Fieles</span>
                        <span className="kpi-value">6.1</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Tasa Recompra</span>
                        <span className="kpi-value">68%</span>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};

export default FrecuenciaCompraPromedio;
