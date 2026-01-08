import React from "react";
import {
    FunnelChart,
    Funnel,
    Tooltip,
    LabelList,
    ResponsiveContainer
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import { Filter } from "lucide-react";
import "../../../../styles/marketing//EmbudoConversion.css";

const data = [
    { stage: "Visitas", value: 12000 },
    { stage: "Leads", value: 6200 },
    { stage: "Carritos", value: 3100 },
    { stage: "Compras", value: 1850 },
];

const EmbudoConversion = () => {
    return (
        <SectionLayout
            title="Embudo de Conversión"
            description="Analiza el paso de los clientes desde visitas hasta compras finales."
            icon={<Filter size={18} />}
        >
            <div className="embudo-container">
                <ResponsiveContainer width="100%" height={320}>
                    <FunnelChart>
                        <Tooltip />
                        <Funnel
                            dataKey="value"
                            data={data}
                            isAnimationActive
                        >
                            <LabelList
                                position="right"
                                fill="#e5e7eb"
                                dataKey="stage"
                            />
                        </Funnel>
                    </FunnelChart>
                </ResponsiveContainer>

                <div className="embudo-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Conversión Total</span>
                        <span className="kpi-value">15.4%</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Drop-off Mayor</span>
                        <span className="kpi-value">Leads → Carrito</span>
                    </div>
                    <div className="kpi">
                        <span className="kpi-label">Compras Finales</span>
                        <span className="kpi-value">1,850</span>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};

export default EmbudoConversion;
