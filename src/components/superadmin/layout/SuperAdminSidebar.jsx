import React from 'react';
import { NavLink } from 'react-router-dom';
import './SuperAdminSidebar.css';

const SuperAdminSidebar = () => {
    return (
        <div className="superadmin-sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/superadmin/dashboard">
                            📊 Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/superadmin/usuarios">
                            👥 Gestión de Usuarios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/superadmin/roles">
                            🧩 Roles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/superadmin/permisos">
                            🔐 Permisos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/superadmin/asignar-permisos">
                            🛡️ Asignar Permisos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/superadmin/auditorias">
                            🕵️ Auditoría
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/superadmin/configuracion">
                            ⚙️ Configuración
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SuperAdminSidebar;
