// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h1>404 - Página No Encontrada</h1>
            <p>La ruta que intentaste acceder no existe. 😕</p>
            <Link to="/login-admin">🔙 Volver al Login Admin</Link>
        </div>
    );
};

export default NotFoundPage;
