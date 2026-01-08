import React from "react";
import AdminLayout from "../../layouts/PanelLayout";
import AlertaGlobalPopup from "../../components/shared/AlertaGlobalPopup";
import AlertaGlobalProductosCriticos from "../../components/shared/AlertaGlobalProductosCriticos"
;

const DashboardAdminPage = () => {
    return (
        <AdminLayout>
            {/* 🪟 Pop-up automático */}
            <AlertaGlobalPopup />

            <h1 className="dashboard-title">Dashboard del Administrador</h1>

            {/* 📦 Alerta tipo tarjeta */}
            <AlertaGlobalProductosCriticos />

            {/* Aquí puedes agregar más KPIs o widgets */}
        </AdminLayout>
    );
};

export default DashboardAdminPage;

