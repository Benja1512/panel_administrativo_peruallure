import { useState } from "react";
import NotificationsPanel from "../layout/NotificationsPanel";
import ActividadGrafico from "../../../components/admin/dashboard/ActividadGrafico";
import ActividadReciente from "../../../components/admin/dashboard/ActividadReciente";
import QuickActions from "./QuickActions";
import SystemHealth from "./SystemHealth";
import AccionesRecomendadas from "./AccionesRecomendadas";

export default function DashboardAdmin() {
    const [stats] = useState({
        usuarios: 124,
        admins: 5,
        logs: 432,
        errores: 2
    });

    return (
        <div className="dashboard-admin">
            <h2>Dashboard Administrativo</h2>

            {/* KPIs */}
            <div className="kpi-grid">
                <KPI title="Usuarios" value={stats.usuarios} />
                <KPI title="Admins" value={stats.admins} />
                <KPI title="Logs" value={stats.logs} />
                <KPI title="Errores" value={stats.errores} />
            </div>

            <NotificationsPanel />
            <QuickActions />

            {/* Actividad */}
            <div className="activity-grid">
                <ActividadGrafico />
                <ActividadReciente />
            </div>


            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <SystemHealth />
                <AccionesRecomendadas />
            </div>

        </div>



    );
}

function KPI({ title, value }) {
    return (
        <div className="kpi-card">
            <h4>{title}</h4>
            <strong>{value}</strong>
        </div>
    );
}
