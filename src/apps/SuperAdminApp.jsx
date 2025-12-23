import React from "react";
import "../styles/AppPanel.css";

const SuperAdminApp = () => {
    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <h2 className="sidebar-title">Super Admin</h2>
                <p className="sidebar-company">Peru Allure Company</p>

                <nav className="sidebar-menu">
                    <button className="menu-item active">Dashboard Global</button>
                    <button className="menu-item">Empresas</button>
                    <button className="menu-item">Administradores</button>
                    <button className="menu-item">Roles Globales</button>
                    <button className="menu-item">Auditoría</button>
                    <button className="menu-item">Configuración Sistema</button>
                </nav>
            </aside>

            <main className="admin-content">
                <h1 className="panel-title">Super Administración</h1>
                <p className="panel-subtitle">
                    Control total de la plataforma y sus configuraciones globales.
                </p>

                <div className="panel-card">
                    <p>
                        Desde aquí puedes gestionar empresas, permisos globales y auditorías
                        del sistema.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default SuperAdminApp;
