import React, { useEffect, useState } from 'react';
import { getPermisos, assignPermisos } from '../../services/userService';

const PermissionSelector = ({ usuario, onPermissionsUpdated }) => {
    const [permisos, setPermisos] = useState([]);
    const [selectedPermisos, setSelectedPermisos] = useState(usuario.permisos || []);

    useEffect(() => {
        const fetchPermisos = async () => {
            const data = await getPermisos();
            setPermisos(data);
        };
        fetchPermisos();
    }, []);

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedPermisos([...selectedPermisos, value]);
        } else {
            setSelectedPermisos(selectedPermisos.filter((permiso) => permiso !== value));
        }
    };

    const handleSave = async () => {
        await assignPermisos(usuario.id, selectedPermisos);
        onPermissionsUpdated();
        alert("Permisos actualizados correctamente.");
    };

    return (
        <div>
            <h4>Asignar Permisos</h4>
            {permisos.map((permiso) => (
                <div key={permiso}>
                    <input
                        type="checkbox"
                        value={permiso}
                        checked={selectedPermisos.includes(permiso)}
                        onChange={handleChange}
                    />
                    <label>{permiso}</label>
                </div>
            ))}
            <button onClick={handleSave}>Guardar Permisos</button>
        </div>
    );
};

export default PermissionSelector;
