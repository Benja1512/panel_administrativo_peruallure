import React, { useEffect, useState } from "react";
import RoleFormModal from "./RoleFormModal";
import superAdminService from "../../services/superAdminService";
import "../../styles/UsuariosPage.css"; // Reutiliza el estilo de usuarios

const RolesPage = () => {
    const [roles, setRoles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);
    const [busqueda, setBusqueda] = useState("");

    // 🔄 Cargar roles desde el backend
    useEffect(() => {
        loadRoles();
    }, []);

    const loadRoles = async () => {
        try {
            const data = await superAdminService.getRoles();
            setRoles(data);
        } catch (error) {
            console.error("Error al cargar roles:", error);
        }
    };

    // ➕ Crear nuevo rol
    const handleCreate = () => {
        setSelectedRole(null);
        setShowModal(true);
    };

    // ✏️ Editar rol existente
    const handleEdit = (role) => {
        setSelectedRole(role);
        setShowModal(true);
    };

    // 🗑️ Eliminar rol
    const handleDelete = async (id) => {
        if (window.confirm("¿Seguro que deseas eliminar este rol?")) {
            await superAdminService.deleteRole(id);
            loadRoles();
        }
    };

    // 📤 Exportar roles a CSV
    const exportToCSV = () => {
        const header = ["Nombre"];
        const rows = roles.map((r) => [r.name]);
        const csvContent =
            "data:text/csv;charset=utf-8," +
            [header, ...rows].map((e) => e.join(";")).join("\n");
        const link = document.createElement("a");
        link.href = encodeURI(csvContent);
        link.download = "roles.csv";
        link.click();
    };

    // 🔍 Filtrar roles
    const filteredRoles = roles.filter((r) =>
        r.name.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="usuarios-page">
            <h2>Gestión de Roles</h2>

            <div className="form-container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <button
                        type="button"
                        onClick={handleCreate}
                        style={{
                            backgroundColor: "#4CAF50",
                            color: "white",
                            padding: "8px 15px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "600",
                        }}
                    >
                        ➕ Crear Rol
                    </button>
                </form>

                <input
                    type="text"
                    placeholder="Buscar rol..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="search-input"
                />
            </div>

            <button className="btn-export" onClick={exportToCSV}>
                📤 Exportar CSV
            </button>

            <table className="usuarios-table">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {filteredRoles.length > 0 ? (
                    filteredRoles.map((r) => (
                        <tr key={r.id}>
                            <td>{r.name}</td>
                            <td>
                                <button onClick={() => handleEdit(r)}>✏️ Editar</button>
                                <button onClick={() => handleDelete(r.id)}>🗑️ Eliminar</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="2" style={{ textAlign: "center", color: "#666" }}>
                            No hay roles registrados
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {showModal && (
                <RoleFormModal
                    role={selectedRole}
                    onClose={() => setShowModal(false)}
                    refreshList={loadRoles}
                />
            )}
        </div>
    );
};

export default RolesPage;
