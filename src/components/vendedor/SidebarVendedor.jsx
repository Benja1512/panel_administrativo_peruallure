import React from "react";
import { NavLink } from "react-router-dom";
import "../superadmin/layout/SuperAdminSidebar.css"; // ⬅️ Reutilizamos el mismo estilo

const SidebarVendedor = () => {
    return (
        <aside className="superadmin-sidebar">
            <div className="sidebar-header">
                <h2>Vendedor</h2>
                <span>Peru Allure Company</span>
            </div>

            <nav className="sidebar-menu">

                <NavLink
                    to="/vendedor"
                    end
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Mis Ventas
                </NavLink>

                <NavLink
                    to="/vendedor/clientes"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Clientes
                </NavLink>

                <NavLink
                    to="/vendedor/productos"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Productos
                </NavLink>

                <NavLink
                    to="/vendedor/comisiones"
                    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
                >
                    Comisiones
                </NavLink>

                <NavLink
                    to="/vendedor/reportes"
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

export default SidebarVendedor;
