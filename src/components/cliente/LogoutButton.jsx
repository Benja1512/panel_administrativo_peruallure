import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../utils/auth';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();          // 🔥 Elimina token de localStorage
        navigate('/login');     // 🔥 Redirige a login
    };

    return (
        <button onClick={handleLogout} style={{ padding: '10px', background: 'crimson', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Cerrar Sesión
        </button>
    );
};

export default LogoutButton;
