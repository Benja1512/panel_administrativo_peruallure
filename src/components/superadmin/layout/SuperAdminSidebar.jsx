import React from "react";
import { NavLink } from "react-router-dom";
import "./SuperAdminSidebar.css";

const SuperAdminSidebar = () => {
    return (
        <aside className="superadmin-sidebar">

            {/* 🔷 CABECERA */}
            <div className="sidebar-header">
                <h2>Super Admin</h2>
                <span>Peru Allure Company</span>
            </div>

            {/* 🚨 SCROLL */}
            <div className="sidebar-scroll">
                <nav className="sidebar-menu">

                    {/* ⭐ Dashboard */}
                    <div className="sidebar-subtitle">📊 Panel Principal</div>
                    <NavLink to="/superadmin/dashboard" className="sidebar-item">Dashboard General</NavLink>

                    {/* 📈 Analytics */}
                    <div className="sidebar-subtitle">📈 Analítica & IA</div>
                    <NavLink to="/superadmin/analytics" className="sidebar-item">🔎 Vista General</NavLink>
                    <NavLink to="/superadmin/analytics/clasicos" className="sidebar-item">📊 Indicadores Clásicos</NavLink>
                    <NavLink to="/superadmin/analytics/ia" className="sidebar-item">🧠 IA & Predicción</NavLink>
                    <NavLink to="/superadmin/analytics/logistica" className="sidebar-item">🚚 Logística & Supply</NavLink>
                    <NavLink to="/superadmin/analytics/marketing" className="sidebar-item">📣 Marketing & Leads</NavLink>
                    <NavLink to="/superadmin/analytics/cliente" className="sidebar-item">😊 Cliente & Fidelización</NavLink>
                    <NavLink to="/superadmin/analytics/avanzado" className="sidebar-item">🚀 Avanzado</NavLink>

                    {/* 👥 Gestión Administrativa */}
                    <div className="sidebar-subtitle">🛠 Gestión Administrativa</div>
                    <NavLink to="/superadmin/administracion/usuarios" className="sidebar-item">👥 Usuarios</NavLink>
                    <NavLink to="/superadmin/administracion/roles" className="sidebar-item">🔧 Roles Globales</NavLink>
                    <NavLink to="/superadmin/administracion/permisos" className="sidebar-item">🔐 Permisos</NavLink>
                    <NavLink to="/superadmin/administracion/asignar-permisos" className="sidebar-item">🗂️ Asignar Permisos</NavLink>

                    {/* ⚙️ Sistema */}
                    <div className="sidebar-subtitle">⚙️ Sistema & Seguridad</div>
                    <NavLink to="/superadmin/auditoria" className="sidebar-item">📁 Auditoría</NavLink>
                    <NavLink to="/superadmin/configuracion" className="sidebar-item">⚙️ Configuración</NavLink>
                    <NavLink to="/superadmin/soporte" className="sidebar-item">🆘 Soporte Técnico</NavLink>

                    {/* 🚧 Próximamente */}
                    <div className="sidebar-item disabled">🏢 Empresas (Próximamente)</div>

                </nav>
            </div>
        </aside>
    );
};

export default SuperAdminSidebar;
