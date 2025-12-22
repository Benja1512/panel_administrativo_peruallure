// src/components/superadmin/RoleFormModal.jsx
import React, { useState } from 'react';
import superAdminService from '../../services/superAdminService';
import './RoleFormModal.css';

const RoleFormModal = ({ role, onClose, refreshList }) => {
    const [name, setName] = useState(role ? role.name : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (role) {
            await superAdminService.updateRole(role.id, { name });
        } else {
            await superAdminService.createRole({ name });
        }
        refreshList();
        onClose();
    };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <h3>{role ? "Editar Rol" : "Crear Rol"}</h3>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del Rol"
                />
                <button type="submit">Guardar</button>
                <button type="button" onClick={onClose}>Cancelar</button>
            </form>
        </div>
    );
};

export default RoleFormModal;
