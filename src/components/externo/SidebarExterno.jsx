import React from "react";
import { NavLink } from "react-router-dom";
import "../superadmin/layout/SuperAdminSidebar.css"; // reutilizamos el diseño rosado

const SidebarExterno = () => {
    return (
        <aside className="superadmin-sidebar">
            <div className="sidebar-header">
                <h2>Vendedor Externo</h2>
                <span>Peru Allure Company</span>
            </div>

            <nav className="sidebar-menu">
                <NavLink to="/externo" end className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}>
                    Mis Ventas
                </NavLink>

                <NavLink to="/externo/clientes" className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}>
                    Clientes Asignados
                </NavLink>

                <NavLink to="/externo/zonas" className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}>
                    Zonas y Rutas
                </NavLink>

                <NavLink to="/externo/reportes" className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}>
                    Reportes
                </NavLink>

                <button className="sidebar-item logout-btn">Cerrar sesión</button>
            </nav>
        </aside>
    );
};

export default SidebarExterno;
