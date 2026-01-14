import { useEffect, useState } from "react";
import superAdminService from "../../../../services/superAdminService";

import PermissionForm from "./PermissionForm";
import PermissionList from "./PermissionList";

import "../../../../styles/gestionAdministrativa/usuarios/Usuarios.css";

const Permisos = () => {
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [search, setSearch] = useState("");

    const handleRefresh = () => setRefresh(!refresh);

    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                setLoading(true);
                const data = await superAdminService.getPermissions();

                // ✅ Orden alfabético
                const sortedData = [...data].sort((a, b) =>
                    a.name.localeCompare(b.name)
                );

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

    const filteredPermissions = permissions.filter((permiso) =>
        permiso.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="usuarios-page">
            <h2>🔐 Gestión de Permisos</h2>

            {/* 🔎 Búsqueda */}
            <input
                type="text"
                placeholder="Buscar permisos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />

            {/* ➕ Crear permiso */}
            <PermissionForm onSave={handleRefresh} />

            {/* 🔄 Estados */}
            {loading && <div className="spinner">Cargando permisos...</div>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && (
                <PermissionList
                    permissions={filteredPermissions}
                    onRefresh={handleRefresh}
                />
            )}
        </div>
    );
};

export default Permisos;
