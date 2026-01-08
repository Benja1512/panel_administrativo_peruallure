import React from "react";
import ExternoLayout from "../../layouts/PanelLayout";

// 🪟 Pop-up global automático
import AlertaGlobalPopup from "../../components/shared/AlertaGlobalPopup";

// 📦 Alerta fija dentro del dashboard
import AlertaGlobalProductosCriticos from "../../components/shared/AlertaGlobalProductosCriticos";

const DashboardExternoPage = () => {
    return (
        <ExternoLayout>
            {/* 🪟 Pop-up global (aparece una sola vez) */}
            <AlertaGlobalPopup />

            <h1 className="dashboard-title">Dashboard del Usuario Externo</h1>

            {/* 📦 Alerta visible en el dashboard */}
            <AlertaGlobalProductosCriticos />
        </ExternoLayout>
    );
};

export default DashboardExternoPage;
