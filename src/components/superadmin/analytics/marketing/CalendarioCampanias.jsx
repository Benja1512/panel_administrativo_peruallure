import React from "react";
import { CalendarDays } from "lucide-react";
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
import "../../../../styles/marketing/CalendarioCampanias.css";

const data = [
    { mes: "Ene", campañas: 4 },
    { mes: "Feb", campañas: 6 },
    { mes: "Mar", campañas: 5 },
    { mes: "Abr", campañas: 7 },
    { mes: "May", campañas: 8 },
    { mes: "Jun", campañas: 6 },
];

const CalendarioCampanias = () => {
    return (
        <SectionLayout
            title="📅 Calendario de Campañas"
            description="Planificación y seguimiento de campañas de marketing por mes."
            icon={<CalendarDays size={20} />}
        >
            <div className="calendario-panel">
                <div className="calendario-kpis">
                    <div className="kpi">
                        <span className="kpi-label">Campañas Activas</span>
                        <span className="kpi-value">8</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Campañas Programadas</span>
                        <span className="kpi-value">5</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Mes con Más Campañas</span>
                        <span className="kpi-value positivo">Mayo</span>
                    </div>

                    <div className="kpi">
                        <span className="kpi-label">Crecimiento Mensual</span>
                        <span className="kpi-value positivo">+14%</span>
                    </div>
                </div>

                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="campañas" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </SectionLayout>
    );
};

export default CalendarioCampanias;
