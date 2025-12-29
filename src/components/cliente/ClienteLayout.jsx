import React from "react";
import { Outlet } from "react-router-dom";
import SidebarCliente from "./SidebarCliente"; // 👈 Sidebar del cliente
import "../../styles/LayoutPanel.css"; // 👈 mismo diseño corporativo

const ClienteLayout = () => {
    return (
        <div className="layout-panel">
            {/* 📌 Sidebar lateral Cliente */}
            <SidebarCliente />

            {/* 📌 Contenido dinámico según la ruta */}
            <main className="layout-content">
                <Outlet />
            </main>
        </div>
    );
};

export default ClienteLayout;
