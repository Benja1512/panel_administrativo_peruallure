import React, { useState } from "react";
import superAdminService from "../../../../services/superAdminService";
import PermissionFormModal from "./PermissionFormModal";

const PermissionList = ({ permissions, onRefresh }) => {
    const [selectedPermiso, setSelectedPermiso] = useState(null);

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de eliminar este permiso?")) {
            try {
                await superAdminService.deletePermission(id);
                onRefresh();
            } catch (error) {
                console.error("Error al eliminar permiso:", error);
                alert("No se pudo eliminar el permiso");
            }
        }
    };

    return (
        <div className="permission-list">
            <h3>Lista de Permisos</h3>

            <ul>
                {permissions.map((permiso) => (
                    <li key={permiso.id}>
                        <strong>{permiso.name}</strong>
                        {permiso.description && ` — ${permiso.description}`}

                        <button onClick={() => setSelectedPermiso(permiso)}>
                            Editar
                        </button>
                        <button onClick={() => handleDelete(permiso.id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>

            {selectedPermiso && (
                <PermissionFormModal
                    permission={selectedPermiso}
                    onClose={() => setSelectedPermiso(null)}
                    refreshList={onRefresh}
                />
            )}
        </div>
    );
};

export default PermissionList;
