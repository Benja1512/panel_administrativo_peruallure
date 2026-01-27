import React from "react";

/* ================= KPIs existentes ================= */
import KPIsOperativos from "./kpis/KPIsOperativos";
import KPISaludSistema from "./kpis/KPISaludSistema";
import KPIBacklog from "./kpis/KPIBacklog";
import TimelineActividad from "./TimelineActividad";

/* ================= KPIs PRO nuevos ================= */
import KPIServicio from "./kpis/KPIServicio";
import KPIInventario from "./kpis/KPIInventario";
import KPISeguridad from "./kpis/KPISeguridad";
import KPIFinanciero from "./kpis/KPIFinanciero";
import KPITendencia from "./kpis/KPITendencia";

/* ================= Charts ================= */
import VentasPorDiaChart from "./charts/VentasPorDiaChart";
import VentasPorCategoriaChart from "./charts/VentasPorCategoriaChart";
import StockVsDemandaChart from "./charts/StockVsDemandaChart";
import PedidosPorEstadoChart from "./charts/PedidosPorEstadoChart";
import DevolucionesChart from "./charts/DevolucionesChart";

/* ================= Alertas y tablas ================= */
import AlertasOperativas from "./alerts/AlertasOperativas";
import TablasOperativas from "./tables/TablasOperativas";

/* ================= CSS ================= */
import "../../../styles/admin/analytics/analyticsKPIs.css";
import "../../../styles/admin/analytics/charts.css";

const AnalyticsAdmin = () => {
    return (
        <div className="analytics-container">
            <h2 className="analytics-title">Analytics Admin</h2>

            {/* ================= KPIs OPERATIVOS ================= */}
            <KPIsOperativos />

            {/* ================= KPIs DE GESTIÓN (NUEVOS) ================= */}
            <div className="analytics-grid-small">
                <KPIServicio />
                <KPIInventario />
                <KPISeguridad />
                <KPIFinanciero />
                <KPITendencia />
            </div>

            {/* ================= KPIs ESTRATÉGICOS ================= */}
            <div className="analytics-grid-small">
                <KPISaludSistema />
                <KPIBacklog />
            </div>

            {/* ================= TIMELINE ================= */}
            <div className="analytics-section">
                <TimelineActividad />
            </div>

            {/* ================= GRÁFICOS ================= */}
            <div className="analytics-grid-main">
                <AlertasOperativas />
                <VentasPorDiaChart />
                <VentasPorCategoriaChart />
                <StockVsDemandaChart />
                <PedidosPorEstadoChart />
                <DevolucionesChart />
            </div>

            {/* ================= TABLAS ================= */}
            <TablasOperativas />
        </div>
    );
};

export default AnalyticsAdmin;
