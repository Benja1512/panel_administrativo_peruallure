import React from "react";
import GestorLayout from "../../layouts/PanelLayout";
import AlertaGlobalProductosCriticos from "../../components/shared/AlertaGlobalProductosCriticos";

const DashboardGestorPage = () => {
    return (
        <GestorLayout>
            <h1 className="dashboard-title">Dashboard del Gestor</h1>
            <AlertaGlobalProductosCriticos />
        </GestorLayout>
    );
};

export default DashboardGestorPage;
