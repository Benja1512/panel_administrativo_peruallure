// src/components/superadmin/administracion/PermissionFormModal.jsx
import React, { useState } from "react";
import superAdminService from "../../../../services/superAdminService";
import "../../../../styles/gestionAdministrativa/permisos/PermissionFormModal.css";

const PermissionFormModal = ({ permission, onClose, onSaved }) => {
    const [formData, setFormData] = useState({
        name: permission?.name || "",
        description: permission?.description || ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (permission) {
                await superAdminService.updatePermission(permission.id, formData);
            } else {
                await superAdminService.createPermission(formData);
            }

            onSaved();   // refresca lista
            onClose();   // cierra modal
        } catch (error) {
            console.error(error);
            alert("Error al guardar el permiso");
        }
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <h3>{permission ? "Editar Permiso" : "Crear Permiso"}</h3>

                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre del permiso"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Descripción"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <div className="modal-actions">
                        <button type="submit" className="btn-primary">
                            Guardar
                        </button>
                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PermissionFormModal;
