import React from "react";
import ClienteLayout from "../../layouts/PanelLayout";

// 🪟 Pop-up global automático
import AlertaGlobalPopup from "../../components/shared/AlertaGlobalPopup";

// 📦 Alerta tipo tarjeta dentro del dashboard
import AlertaGlobalProductosCriticos from "../../components/shared/AlertaGlobalProductosCriticos";

const DashboardClientePage = () => {
    return (
        <ClienteLayout>
            {/* 🪟 Pop-up automático (solo aparece una vez) */}
            <AlertaGlobalPopup />

            <h1 className="dashboard-title">Dashboard del Cliente</h1>

            {/* 📦 Alerta visual fija */}
            <AlertaGlobalProductosCriticos />
        </ClienteLayout>
    );
};

export default DashboardClientePage;
