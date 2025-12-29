import React from "react";
import { Outlet } from "react-router-dom";
import SidebarExterno from "./SidebarExterno";
import "../../styles/LayoutPanel.css"; // mismo diseño corporativo

const ExternoLayout = () => {
    return (
        <div className="layout-panel">
            {/* 📌 Sidebar lateral */}
            <SidebarExterno />

            {/* 📌 Contenido dinámico */}
            <main className="layout-content">
                <Outlet />
            </main>
        </div>
    );
};

export default ExternoLayout;
