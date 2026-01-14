// src/components/superadmin/PermissionDeleteModal.jsx
import React from 'react';
import superAdminService from '../../services/superAdminService';
import './PermissionDeleteModal.css';

const PermissionDeleteModal = ({ permission, onClose }) => {
    const handleDelete = async () => {
        await superAdminService.deletePermission(permission.id);
        alert("Permiso eliminado exitosamente");
        onClose();
    };

    return (
        <div className="modal">
            <p>¿Estás seguro de que quieres eliminar el permiso <strong>{permission.name}</strong>?</p>
            <button onClick={handleDelete}>Sí, eliminar</button>
            <button onClick={onClose}>Cancelar</button>
        </div>
    );
};

export default PermissionDeleteModal;
