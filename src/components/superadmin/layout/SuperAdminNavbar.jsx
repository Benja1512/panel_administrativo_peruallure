import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuperAdminNavbar.css";

const SuperAdminNavbar = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login-superadmin");
    };

    return (
        <nav className="superadmin-navbar">
            {/* Izquierda */}
            <div className="navbar-left">
                <h2>SuperAdmin</h2>
            </div>

            {/* Derecha */}
            <div className="navbar-right">
                <span className="user-info">
                    👤 {user?.nombre || "SuperAdmin"} ({user?.roles?.[0] || "SUPER_ADMIN"})
                </span>
                <button className="logout-btn" onClick={handleLogout}>
                    Cerrar Sesión
                </button>
            </div>
        </nav>
    );
};

export default SuperAdminNavbar;
