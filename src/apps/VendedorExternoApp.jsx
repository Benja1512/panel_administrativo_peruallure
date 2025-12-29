import React from "react";
import { Outlet } from "react-router-dom";

// 🔥 ESTA ES LA RUTA CORRECTA
import SidebarExterno from "../components/externo/SidebarExterno";

import "../styles/LayoutPanel.css";

const VendedorExternoApp = () => {
    return (
        <div className="layout-panel">
            <SidebarExterno />

            <main className="layout-content">
                <h1 className="panel-title">Panel Vendedor Externo</h1>
                <p className="panel-subtitle">Gestión de ventas en campo y cartera asignada.</p>

                <div className="panel-card">
                    Controla tus clientes asignados, registra ventas y reportes diarios.
                </div>

                <Outlet />
            </main>
        </div>
    );
};

export default VendedorExternoApp;
