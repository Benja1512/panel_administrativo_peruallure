import React from "react";
import "../styles/AppPanel.css";

const AdminApp = () => {
    return (
        <div className="admin-layout">
            {/* SIDEBAR */}
            <aside className="admin-sidebar">
                <h2 className="sidebar-title">Admin</h2>
                <p className="sidebar-company">Peru Allure Company</p>

                <nav className="sidebar-menu">
                    <button className="menu-item active">Dashboard</button>
                    <button className="menu-item">Usuarios</button>
                    <button className="menu-item">Roles y Permisos</button>
                    <button className="menu-item">Configuración</button>
                    <button className="menu-item">Reportes</button>
                    <button className="menu-item">Seguridad</button>
                </nav>
            </aside>

            {/* CONTENIDO */}
            <main className="admin-content">
                <h1 className="panel-title">Administrador</h1>
                <p className="panel-subtitle">
                    Bienvenido al panel de administración. Desde aquí podrás gestionar
                    usuarios, configuraciones y reportes del sistema.
                </p>

                <div className="panel-card">
                    <p>
                        Selecciona una opción del menú lateral para comenzar a administrar
                        la plataforma.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default AdminApp;
