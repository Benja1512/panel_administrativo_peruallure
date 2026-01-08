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
import "../../../../styles/marketing/CLV_LTV.css";

const data = [
    { segmento: "Ocasional", clv: 420 },
    { segmento: "Recurrente", clv: 980 },
    { segmento: "VIP", clv: 2450 },
];

const CLV_LTV = () => {
    return (
        <SectionLayout
            title="💎 CLV / LTV"
            description="Valor total esperado que genera un cliente durante toda su relación con la empresa."
        >
            <div className="clv-panel">
                <div className="clv-kpis">
                    <div className="kpi">
                        <span className="kpi-label">CLV Promedio</span>
                        <span className="kpi-value">€1,120</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">CLV VIP</span>
                        <span className="kpi-value positivo">€2,450</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Relación CLV / CAC</span>
                        <span className="kpi-value positivo">4.3x</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Tiempo de Vida</span>
                        <span className="kpi-value">26 meses</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="segmento" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="clv" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default CLV_LTV;
