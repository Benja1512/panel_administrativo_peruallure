import React from "react";
import { NavLink } from "react-router-dom";
import "../superadmin/layout/SuperAdminSidebar.css"; // reutilizamos el mismo diseño

const SidebarCliente = () => {
    return (
        <aside className="superadmin-sidebar">
            <div className="sidebar-header">
                <h2>Cliente</h2>
                <span>Peru Allure Company</span>
            </div>

            <nav className="sidebar-menu">
                <NavLink
                    to="/cliente"
                    end
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/cliente/compras"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Mis compras
                </NavLink>

                <NavLink
                    to="/cliente/pagos"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Pagos
                </NavLink>

                <NavLink
                    to="/cliente/micuenta"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Mi cuenta
                </NavLink>

                <NavLink
                    to="/cliente/soporte"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Soporte
                </NavLink>

                <button className="sidebar-item logout-btn">
                    Cerrar sesión
                </button>
            </nav>
        </aside>
    );
};

export default SidebarCliente;
