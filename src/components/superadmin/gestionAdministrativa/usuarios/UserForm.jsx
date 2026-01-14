import React, { useState, useEffect } from 'react';
import { createUsuario, updateUsuario, getRoles }
    from '../../../../services/userService';

import '../../../../styles/UserForm.css';

const UserForm = ({ selectedUser, onSave }) => {
    // Estados del formulario
    const [usuario, setUsuario] = useState({
        nombre: '',
        correoElectronico: '',
        rol: '',
        contrasenaHash: '',
    });

    const [rolesDisponibles, setRolesDisponibles] = useState([]);
    const [loading, setLoading] = useState(false);

    // ✅ Cargar roles desde el backend
    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const roles = await getRoles();
                setRolesDisponibles(roles);
            } catch (error) {
                console.error('Error al obtener roles:', error);
            }
        };
        fetchRoles();
    }, []);

    // ✅ Si hay un usuarios seleccionado para editar, se carga en el formulario
    useEffect(() => {
        if (selectedUser) {
            setUsuario(selectedUser);
        } else {
            setUsuario({ nombre: '', correoElectronico: '', rol: '', contrasenaHash: '' });
        }
    }, [selectedUser]);

    // ✅ Manejo de cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    // ✅ Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (usuario.id) {
                await updateUsuario(usuario.id, usuario);
                alert('Usuario actualizado correctamente ✅');
            } else {
                await createUsuario(usuario);
                alert('Usuario creado correctamente ✅');
            }
            onSave();
        } catch (error) {
            console.error('Error al guardar usuarios:', error);
            alert('❌ Error al guardar el usuarios');
        } finally {
            setLoading(false);
        }
    };

    // ✅ Manejo del botón "Limpiar"
    const handleClear = () => {
        setUsuario({ nombre: '', correoElectronico: '', rol: '', contrasenaHash: '' });
    };

    return (
        <form className="user-form" onSubmit={handleSubmit}>
            <input
                name="nombre"
                placeholder="Nombre"
                value={usuario.nombre}
                onChange={handleChange}
                required
            />
            <input
                name="correoElectronico"
                placeholder="Correo Electrónico"
                value={usuario.correoElectronico}
                onChange={handleChange}
                required
            />
            <input
                name="contrasenaHash"
                placeholder="Contraseña"
                value={usuario.contrasenaHash}
                onChange={handleChange}
                required={!usuario.id} // Solo obligatorio si es un nuevo usuarios
                disabled={!!usuario.id} // Deshabilitado si está en modo edición
            />
            <select
                name="rol"
                value={usuario.rol}
                onChange={handleChange}
                required
            >
                <option value="">Selecciona un rol</option>
                {rolesDisponibles.map((rol) => (
                    <option key={rol.id} value={rol.nombre}>
                        {rol.nombre}
                    </option>
                ))}
            </select>

            <div className="buttons">
                <button type="submit" disabled={loading}>
                    {loading ? 'Guardando...' : usuario.id ? 'Actualizar' : 'Crear'}
                </button>
                <button type="button" onClick={handleClear}>
                    Limpiar
                </button>
            </div>
        </form>
    );
};

export default UserForm;
