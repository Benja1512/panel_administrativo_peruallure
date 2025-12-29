import React from "react";
import { NavLink } from "react-router-dom";
import "../superadmin/layout/SuperAdminSidebar.css"; // Reutilizamos el mismo diseño

const SidebarGestor = () => {
    return (
        <aside className="superadmin-sidebar">
            <div className="sidebar-header">
                <h2>Gestor</h2>
                <span>Peru Allure Company</span>
            </div>

            <nav className="sidebar-menu">
                <NavLink
                    to="/gestor"
                    end
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Resumen
                </NavLink>

                <NavLink
                    to="/gestor/operaciones"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Operaciones
                </NavLink>

                <NavLink
                    to="/gestor/pedidos"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Pedidos
                </NavLink>

                <NavLink
                    to="/gestor/clientes"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Clientes
                </NavLink>

                <NavLink
                    to="/gestor/reportes"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Reportes
                </NavLink>

                <button className="sidebar-item logout-btn">
                    Cerrar sesión
                </button>
            </nav>
        </aside>
    );
};

export default SidebarGestor;
