import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/PanelVariacionMensual.css";

const data = [
    { mes: "Mes Anterior", ventas: 82000, costos: 54000 },
    { mes: "Mes Actual", ventas: 89500, costos: 56200 },
];

const PanelVariacionMensual = () => {
    return (
        <SectionLayout
            title="📆 Variación Mensual"
            description="Comparación de ventas, costos y crecimiento frente al mes anterior."
        >
            <div className="variacion-panel">
                <div className="variacion-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Variación Ventas</span>
                        <span className="kpi-value positivo">+9.1%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Variación Costos</span>
                        <span className="kpi-value negativo">+4.1%</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Margen Neto</span>
                        <span className="kpi-value">37.2%</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="ventas"
                            strokeWidth={3}
                        />
                        <Line
                            type="monotone"
                            dataKey="costos"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default PanelVariacionMensual;
