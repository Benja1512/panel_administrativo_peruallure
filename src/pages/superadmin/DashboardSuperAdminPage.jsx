import React from "react";
import "../../styles/DashboardSuperAdminPage.css";
import AlertaGlobalProductosCriticos from "../../components/shared/AlertaGlobalProductosCriticos";

const DashboardSuperAdminPage = () => {
    return (
        <div className="dashboard-superadmin">
            <h1 className="dashboard-title">
                Bienvenido a Peru Allure Company
            </h1>

            <p className="dashboard-subtitle">
                Panel de control global del sistema
            </p>

            {/* 📊 KPIs principales */}
            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <h3>Usuarios Totales</h3>
                    <span className="dashboard-number">1,248</span>
                </div>

                <div className="dashboard-card">
                    <h3>Empresas Activas</h3>
                    <span className="dashboard-number">32</span>
                </div>

                <div className="dashboard-card">
                    <h3>Roles Configurados</h3>
                    <span className="dashboard-number">14</span>
                </div>

                <div className="dashboard-card">
                    <h3>Alertas del Sistema</h3>
                    <span className="dashboard-number warning">5</span>
                </div>
            </div>

            {/* 🚨 Alerta Global de Productos Críticos */}
            <AlertaGlobalProductosCriticos />

            {/* 📝 Información adicional */}
            <div className="dashboard-info">
                <p>
                    Desde este panel puedes supervisar usuarios, roles, permisos,
                    auditorías, analytics y configuraciones globales del sistema.
                </p>
            </div>
        </div>
    );
};

export default DashboardSuperAdminPage;
