// src/components/superadmin/PermissionFormModal.jsx
import React, { useState } from 'react';
import superAdminService from '../../services/superAdminService';
import './PermissionFormModal.css';

const PermissionFormModal = ({ permission, onClose }) => {
    const [formData, setFormData] = useState({
        name: permission ? permission.name : '',
        description: permission ? permission.description : ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (permission) {
            await superAdminService.updatePermission(permission.id, formData);
        } else {
            await superAdminService.createPermission(formData);
        }
        onClose();
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <h3>{permission ? "Editar Permiso" : "Crear Permiso"}</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre del Permiso"
                    value={formData.name}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Descripción"
                    value={formData.description}
                    onChange={handleChange}
                />
                <button type="submit">Guardar</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
};

export default PermissionFormModal;
