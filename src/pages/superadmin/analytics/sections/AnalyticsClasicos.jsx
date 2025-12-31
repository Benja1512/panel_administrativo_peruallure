import React from "react";

/* 📌 Módulos existentes */
import KPIs from "../../../../components/superadmin/analytics/KPIs";
import FacturacionMensual from "../../../../components/superadmin/analytics/analyticsClasicos/facturacion/FacturacionMensual";
import Facturacion5Anios from "../../../../components/superadmin/analytics/analyticsClasicos/facturacion/Facturacion5Anios";
import MRRmensual from "../../../../components/superadmin/analytics/analyticsClasicos/mrrMensual/MRRmensual";
import TopProductos from "../../../../components/superadmin/analytics/analyticsClasicos/topProductos/TopProductos";

/* 📌 Import correcto para Facturación Diaria */
import FacturacionDiaria from "../analyticsclasicos/facturacion/FacturacionDiaria"; // ✅ ESTA ES LA RUTA CORRECTA

/* 📌 Estilos */
import "../../../../styles/AnalyticsClasicos.css";

const AnalyticsClasicos = () => (
    <div className="analytics-page-container">
        <h1>📊 Indicadores Clásicos</h1>

        {/* 📍 KPIs globales */}
        <KPIs />

        {/* 💸 Accesos y navegación rápida */}
        <div className="facturacion-access">
            <h2>💸 Acceso al módulo de Facturación</h2>
            <p>Navega a las secciones específicas del reporte financiero:</p>

            <div className="facturacion-btns">
                <a href="/superadmin/facturacion/mensual" className="btn-fact">📊 Mensual</a>
                <a href="/superadmin/facturacion/diaria" className="btn-fact">📅 Diario</a>
                <a href="/superadmin/facturacion/5anios" className="btn-fact">📆 5 Años</a>
                <a href="/superadmin/facturacion" className="btn-fact full">📈 Panel Completo</a>
            </div>
        </div>

        {/* 💳 Tarjetas de vistas rápidas */}
        <div className="facturacion-card-container">
            <h3>📂 Vistas rápidas de reportes</h3>
            <div className="facturacion-card-grid">

                <a href="/superadmin/facturacion/mensual" className="facturacion-card">
                    <h4>📊 Mensual</h4>
                    <p>Histórico mes a mes + tendencia.</p>
                </a>

                <a href="/superadmin/facturacion/diaria" className="facturacion-card">
                    <h4>📅 Diario</h4>
                    <p>Control de ingresos día por día.</p>
                </a>

                <a href="/superadmin/facturacion/5anios" className="facturacion-card">
                    <h4>📆 5 Años</h4>
                    <p>Resumen anual + crecimiento acumulado.</p>
                </a>

                <a href="/superadmin/facturacion" className="facturacion-card full">
                    <h4>📈 Panel Completo</h4>
                    <p>Todos los gráficos en un solo módulo.</p>
                </a>
            </div>
        </div>

        {/* 📍 Secciones completas, integradas en la misma página */}
        <FacturacionMensual />      {/* 📊 Mensual */}
        <FacturacionDiaria />       {/* 📅 ⬅ YA FUNCIONA Y ES EL MISMO DISEÑO */}
        <Facturacion5Anios />       {/* 📆 5 años */}
        <MRRmensual />              {/* 🔁 Recurrencia mensual */}
        <TopProductos />            {/* 🏆 Ranking Productos */}

    </div>
);

export default AnalyticsClasicos;
