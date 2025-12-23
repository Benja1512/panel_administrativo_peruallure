import React from "react";
import "../styles/AppPanel.css";

const GestorApp = () => {
    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <h2 className="sidebar-title">Gestor</h2>
                <p className="sidebar-company">Peru Allure Company</p>

                <nav className="sidebar-menu">
                    <button className="menu-item active">Resumen</button>
                    <button className="menu-item">Operaciones</button>
                    <button className="menu-item">Pedidos</button>
                    <button className="menu-item">Clientes</button>
                    <button className="menu-item">Reportes</button>
                </nav>
            </aside>

            <main className="admin-content">
                <h1 className="panel-title">Panel Gestor</h1>
                <p className="panel-subtitle">
                    Supervisión operativa y control de procesos.
                </p>

                <div className="panel-card">
                    <p>
                        Gestiona pedidos, operaciones diarias y reportes de rendimiento.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default GestorApp;
