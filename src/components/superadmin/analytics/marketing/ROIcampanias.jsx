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
import "../../../../styles/marketing/ROICampanias.css";

const data = [
    { campaña: "Google Ads", inversion: 12000, ingresos: 28500, roi: 137 },
    { campaña: "Facebook Ads", inversion: 9500, ingresos: 19800, roi: 108 },
    { campaña: "Email Marketing", inversion: 3200, ingresos: 15600, roi: 388 },
    { campaña: "Influencers", inversion: 7400, ingresos: 16200, roi: 119 },
];

const ROICampanias = () => {
    return (
        <SectionLayout
            title="📈 ROI Campañas"
            description="Retorno de inversión por campaña de marketing."
        >
            <div className="roi-panel">
                <div className="roi-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Mejor ROI</span>
                        <span className="kpi-value positivo">Email (388%)</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Mayor Inversión</span>
                        <span className="kpi-value">Google Ads</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">ROI Promedio</span>
                        <span className="kpi-value">188%</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="campaña" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="inversion" radius={[8, 8, 0, 0]} />
                        <Bar dataKey="ingresos" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default ROICampanias;
