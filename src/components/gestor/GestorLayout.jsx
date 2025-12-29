import React from "react";
import { Outlet } from "react-router-dom";
import SidebarGestor from "./SidebarGestor";
import "../superadmin/layout/SuperAdminSidebar.css";
import "../../styles/LayoutPanel.css";

const GestorLayout = () => {
    return (
        <div className="layout-panel">
            <SidebarGestor />
            <main className="layout-content">
                <Outlet />  {/* Aquí se cargan las páginas según la ruta */}
            </main>
        </div>
    );
};

export default GestorLayout;
