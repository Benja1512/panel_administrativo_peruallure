import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/LayoutPanel.css"; // mismo diseño del resto
import SidebarVendedor from "./SidebarVendedor";

const VendedorLayout = () => {
    return (
        <div className="layout-panel">
            {/* 📌 Sidebar */}
            <SidebarVendedor />

            {/* 📌 Zona de contenido dinámico */}
            <main className="layout-content">
                <Outlet />
            </main>
        </div>
    );
};

export default VendedorLayout;
