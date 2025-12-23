import React, { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import "../../styles/AuthForms.css";

const roles = [
    { key: "admin", label: "Administrador" },
    { key: "superadmin", label: "Super Admin" },
    { key: "gestor", label: "Gestor" },
    { key: "vendedor", label: "Vendedor" },
    { key: "cliente", label: "Cliente" },
    { key: "externo", label: "Externo" },
];

const LoginPage = () => {
    const [rolSeleccionado, setRolSeleccionado] = useState("admin");

    return (
        <div className="auth-layout">
            <aside className="auth-sidebar">
                <h3 className="roles-title">Acceso por rol</h3>
                <ul className="roles-list">
                    {roles.map((rol) => (
                        <li
                            key={rol.key}
                            className={`role-item ${
                                rolSeleccionado === rol.key ? "active" : ""
                            }`}
                            onClick={() => setRolSeleccionado(rol.key)}
                        >
                            {rol.label}
                        </li>
                    ))}
                </ul>
            </aside>

            <main className="auth-main">
                <div className="auth-card">
                    <div className="auth-header">
                        <h1 className="auth-welcome">
                            Bienvenido a <span>Peru Allure Company</span>
                        </h1>
                        <p className="auth-subtitle">
                            Acceso – {roles.find(r => r.key === rolSeleccionado)?.label}
                        </p>
                    </div>

                    <LoginForm role={rolSeleccionado} />
                </div>
            </main>

        </div>
    );
};

export default LoginPage;
