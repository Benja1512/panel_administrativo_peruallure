import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginForm.css"; // ✅ CSS NORMAL

const roleRedirectMap = {
    admin: "/admin",
    superadmin: "/superadmin",
    gestor: "/gestor",
    vendedor: "/vendedor",
    cliente: "/cliente",
    externo: "/externo",
};

const LoginForm = ({ role }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(roleRedirectMap[role] || "/login");
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Correo o Usuario</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="usuario o correo"
                />
            </div>

            <div className="form-group">
                <label>Contraseña</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                />
            </div>

            <button type="submit" className="login-button">
                Iniciar Sesión
            </button>
        </form>
    );
};

export default LoginForm;
