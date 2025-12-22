import React, { useEffect, useState } from 'react';
import { getPermisos, deletePermiso } from '../../services/userService';
import PermissionEditModal from './PermissionEditModal';

const PermissionList = ({ onRefresh }) => {
    const [permisos, setPermisos] = useState([]);
    const [selectedPermiso, setSelectedPermiso] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPermisos();
            setPermisos(data);
        };
        fetchData();
    }, [onRefresh]);

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar este permiso?')) {
            await deletePermiso(id);
            onRefresh();
        }
    };

    return (
        <div>
            <h3>Lista de Permisos</h3>
            <ul>
                {permisos.map((permiso) => (
                    <li key={permiso.id}>
                        {permiso.nombre} - {permiso.descripcion}
                        <button onClick={() => setSelectedPermiso(permiso)}>Editar</button>
                        <button onClick={() => handleDelete(permiso.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            {selectedPermiso && (
                <PermissionEditModal
                    permiso={selectedPermiso}
                    onClose={() => setSelectedPermiso(null)}
                    onSave={onRefresh}
                />
            )}
        </div>
    );
};

export default PermissionList;
