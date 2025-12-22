import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './WelcomeBanner.css';

const WelcomeBanner = () => {
    const { user } = useContext(AuthContext);

    const roleLabels = {
        SUPERADMIN: 'Super Administrador 🛡️',
        ADMIN: 'Administrador 🧰',
        GESTOR: 'Gestor 📋',
        CLIENTE: 'Cliente 🛍️',
        VENDEDOR: 'Vendedor 🛒',
        EXTERNO: 'Vendedor Externo 🌐',
    };

    const role = user?.role?.toUpperCase();
    const roleLabel = roleLabels[role] || 'Usuario';
    const name = user?.name || 'Invitado';

    return (
        <div className="welcome-banner">
            <h2>👋 ¡Hola, {name}!</h2>
            <p>Bienvenido al panel de {roleLabel}.</p>
            <p>Usa el menú lateral para acceder a tus herramientas.</p>
        </div>
    );
};

export default WelcomeBanner;
