import React from "react";
import "../styles/AppPanel.css";

const VendedorExternoApp = () => {
    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <h2 className="sidebar-title">Externo</h2>
                <p className="sidebar-company">Peru Allure Company</p>

                <nav className="sidebar-menu">
                    <button className="menu-item active">Ventas</button>
                    <button className="menu-item">Catálogo</button>
                    <button className="menu-item">Clientes</button>
                    <button className="menu-item">Soporte</button>
                </nav>
            </aside>

            <main className="admin-content">
                <h1 className="panel-title">Vendedor Externo</h1>
                <p className="panel-subtitle">
                    Acceso externo para gestión comercial básica.
                </p>

                <div className="panel-card">
                    <p>
                        Accede al catálogo, registra ventas y consulta información básica.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default VendedorExternoApp;
