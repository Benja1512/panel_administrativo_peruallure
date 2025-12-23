import React from "react";
import { NavLink } from "react-router-dom";
import "./SuperAdminSidebar.css";

const SuperAdminSidebar = () => {
    return (
        <aside className="superadmin-sidebar">
            <div className="sidebar-header">
                <h2>Super Admin</h2>
                <span>Peru Allure Company</span>
            </div>

            <nav className="sidebar-menu">
                <NavLink
                    to="/superadmin/dashboard"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Dashboard Global
                </NavLink>

                <NavLink
                    to="/superadmin/analytics"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Analytics
                </NavLink>

                <NavLink
                    to="/superadmin/usuarios"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Administradores
                </NavLink>

                <NavLink
                    to="/superadmin/roles"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Roles Globales
                </NavLink>

                <NavLink
                    to="/superadmin/permisos"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Permisos
                </NavLink>

                <NavLink
                    to="/superadmin/auditoria"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Auditoría
                </NavLink>

                <NavLink
                    to="/superadmin/configuracion"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Configuración Sistema
                </NavLink>

                <NavLink
                    to="/superadmin/soporte"
                    className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""}`
                    }
                >
                    Soporte
                </NavLink>

                <div className="sidebar-item disabled">
                    Empresas (próximamente)
                </div>
            </nav>
        </aside>
    );
};

export default SuperAdminSidebar;
