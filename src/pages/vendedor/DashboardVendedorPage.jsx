import React from "react";
import VendedorLayout from "../../layouts/PanelLayout";
import AlertaGlobalProductosCriticos from "../../components/shared/AlertaGlobalProductosCriticos";

const DashboardVendedorPage = () => {
    return (
        <VendedorLayout>
            <h1 className="dashboard-title">Dashboard del Vendedor</h1>
            <AlertaGlobalProductosCriticos />
        </VendedorLayout>
    );
};

export default DashboardVendedorPage;
