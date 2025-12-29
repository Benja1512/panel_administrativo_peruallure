import React from "react";
import { Outlet } from "react-router-dom";
import SidebarVendedor from "../components/vendedor/SidebarVendedor";
import "../styles/LayoutPanel.css";

const VendedorApp = () => {
    return (
        <div className="layout-panel">
            {/* 📌 Sidebar fijo */}
            <SidebarVendedor />

            {/* 📌 Contenido dinámico + textos base */}
            <main className="layout-content">
                <h1 className="panel-title">Panel Vendedor</h1>
                <p className="panel-subtitle">Gestión comercial y seguimiento de ventas.</p>

                {/* 💡 Cuando no hay ruta interna, se muestra esto */}
                <div className="panel-card">
                    Aquí podrás registrar ventas, gestionar clientes y revisar comisiones.
                </div>

                {/* 📌 Cuando cambias el menú, el contenido se reemplaza aquí */}
                <Outlet />
            </main>
        </div>
    );
};

export default VendedorApp;
