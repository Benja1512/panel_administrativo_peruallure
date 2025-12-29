import React from "react";
import { NavLink } from "react-router-dom";
import "../superadmin/layout/SuperAdminSidebar.css"; // Reutiliza el diseño del superadmin

const AdminSidebar = () => {
    return (
        <aside className="superadmin-sidebar">
            <div className="sidebar-header">
                <h2>Admin</h2>
                <span>Peru Allure Company</span>
            </div>

            <nav className="sidebar-menu">

                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/usuarios"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Usuarios
                </NavLink>

                <NavLink
                    to="/admin/reportes"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Reportes
                </NavLink>

                <NavLink
                    to="/admin/ventas"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Ventas
                </NavLink>

                <NavLink
                    to="/admin/inventario"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Inventario
                </NavLink>

                <NavLink
                    to="/admin/configuracion"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Configuración
                </NavLink>

                <button className="sidebar-item logout-btn">
                    Cerrar sesión
                </button>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
