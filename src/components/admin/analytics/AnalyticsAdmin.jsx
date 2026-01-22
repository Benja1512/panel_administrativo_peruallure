import React from "react";
import KPIsOperativos from "./KPIsOperativos";

// 🆕 KPIs nuevos
import KPISaludSistema from "./KPISaludSistema";
import KPIBacklog from "./KPIBacklog";
import TimelineActividad from "./TimelineActividad";

// 📊 Gráficos operativos
import VentasPorDiaChart from "./charts/VentasPorDiaChart";
import VentasPorCategoriaChart from "./charts/VentasPorCategoriaChart";
import StockVsDemandaChart from "./charts/StockVsDemandaChart";
import PedidosPorEstadoChart from "./charts/PedidosPorEstadoChart";
import DevolucionesChart from "./charts/DevolucionesChart";

// 🚨 Alertas y tablas
import AlertasOperativas from "./alerts/AlertasOperativas";
import TablasOperativas from "./tables/TablasOperativas";

// 🎨 CSS
import "../../../styles/admin/analytics/analyticsKPIs.css";
import "../../../styles/admin/analytics/charts.css";

const AnalyticsAdmin = () => {
    return (
        <div className="analytics-container">
            <h2 className="analytics-title">Analytics Admin</h2>

            {/* KPIs OPERATIVOS */}
            <KPIsOperativos />

            {/* KPIs ESTRATÉGICOS */}
            <div className="analytics-grid-small">
                <KPISaludSistema />
                <KPIBacklog />
            </div>

            {/* TIMELINE */}
            <div className="analytics-section">
                <TimelineActividad />
            </div>

            {/* BLOQUE PRINCIPAL */}
            <div className="analytics-grid-main">
                <AlertasOperativas />
                <VentasPorDiaChart />
                <VentasPorCategoriaChart />
                <StockVsDemandaChart />
                <PedidosPorEstadoChart />
                <DevolucionesChart />
                <TablasOperativas />
            </div>
        </div>
    );
};

export default AnalyticsAdmin;
