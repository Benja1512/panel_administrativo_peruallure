import React from "react";
import "../styles/AppPanel.css";

const ClienteApp = () => {
    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <h2 className="sidebar-title">Cliente</h2>
                <p className="sidebar-company">Peru Allure Company</p>

                <nav className="sidebar-menu">
                    <button className="menu-item active">Inicio</button>
                    <button className="menu-item">Mis Pedidos</button>
                    <button className="menu-item">Facturación</button>
                    <button className="menu-item">Soporte</button>
                    <button className="menu-item">Perfil</button>
                </nav>
            </aside>

            <main className="admin-content">
                <h1 className="panel-title">Área Cliente</h1>
                <p className="panel-subtitle">
                    Consulta pedidos, facturas y tu información personal.
                </p>

                <div className="panel-card">
                    <p>
                        Bienvenido a tu área personal. Aquí puedes revisar tus compras y
                        gestionar tu cuenta.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default ClienteApp;
