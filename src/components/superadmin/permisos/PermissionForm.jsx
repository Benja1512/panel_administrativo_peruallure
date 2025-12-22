import React, { useState } from 'react';
import { createPermiso } from '../../services/userService';

const PermissionForm = ({ onSave }) => {
    const [permiso, setPermiso] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPermiso({ nombre: permiso, descripcion });
            onSave(); // 🔄 Recargar la lista
            setPermiso('');
            setDescripcion('');
        } catch (error) {
            alert('Error al crear el permiso.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                placeholder="Nombre del Permiso"
                value={permiso}
                onChange={(e) => setPermiso(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <button type="submit">Crear Permiso</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
    },
};

export default PermissionForm;
