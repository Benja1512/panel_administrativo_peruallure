// src/components/superadmin/PermisosPage.jsx
import React, { useState, useEffect } from 'react';
import superAdminService from '../../services/superAdminService';
import PermissionForm from '../../components/superadmin/PermissionForm';
import PermissionList from '../../components/superadmin/PermissionList';
import './PermisosPage.css';

const PermisosPage = () => {
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [search, setSearch] = useState('');

    const handleRefresh = () => setRefresh(!refresh);

    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                setLoading(true);
                const data = await superAdminService.getPermissions();
                // ✅ Ordenar alfabéticamente por nombre
                const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
                setPermissions(sortedData);
            } catch (err) {
                console.error("Error al cargar permisos:", err);
                setError("No se pudieron cargar los permisos.");
            } finally {
                setLoading(false);
            }
        };
        fetchPermissions();
    }, [refresh]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    // ✅ Filtrado rápido en memoria
    const filteredPermissions = permissions.filter((permiso) =>
        permiso.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="permisos-page">
            <h1>🔐 Gestión de Permisos</h1>

            {/* 🔎 Barra de búsqueda */}
            <input
                type="text"
                placeholder="🔍 Buscar permisos..."
                value={search}
                onChange={handleSearchChange}
                className="search-bar"
            />

            {/* ➕ Formulario para crear permisos */}
            <PermissionForm onSave={handleRefresh} />

            {/* 🔄 Estado de carga */}
            {loading ? (
                <div className="spinner">🌀 Cargando permisos...</div>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <PermissionList permissions={filteredPermissions} onRefresh={handleRefresh} />
            )}
        </div>
    );
};

export default PermisosPage;
