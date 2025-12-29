import React from "react";
import { Outlet } from "react-router-dom";
import ClienteRoutes from "../routes/ClienteRoute";
import SidebarCliente from "../components/cliente/SidebarCliente";
import "../styles/LayoutPanel.css";

const ClienteApp = () => {
    return (
        <div className="layout-panel">
            <SidebarCliente />
            <main className="layout-content">
                <ClienteRoutes />
            </main>
        </div>
    );
};

export default ClienteApp;
