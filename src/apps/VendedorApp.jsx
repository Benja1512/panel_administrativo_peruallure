import React from "react";
import "../styles/AppPanel.css";

const VendedorApp = () => {
    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <h2 className="sidebar-title">Vendedor</h2>
                <p className="sidebar-company">Peru Allure Company</p>

                <nav className="sidebar-menu">
                    <button className="menu-item active">Mis Ventas</button>
                    <button className="menu-item">Clientes</button>
                    <button className="menu-item">Productos</button>
                    <button className="menu-item">Comisiones</button>
                    <button className="menu-item">Reportes</button>
                </nav>
            </aside>

            <main className="admin-content">
                <h1 className="panel-title">Panel Vendedor</h1>
                <p className="panel-subtitle">
                    Gestión comercial y seguimiento de ventas.
                </p>

                <div className="panel-card">
                    <p>
                        Aquí podrás registrar ventas, gestionar clientes y revisar tus
                        comisiones.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default VendedorApp;
