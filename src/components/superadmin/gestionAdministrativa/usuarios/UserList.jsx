import React, { useEffect, useState } from 'react';
import { getUsuarios } from '../../../../services/userService';
import '../../../../styles/UserList.css';


const UserList = ({ onEdit, reload }) => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // ✅ Cargar lista de usuarios al montar el componente o cuando "reload" cambie
    useEffect(() => {
        fetchUsuarios();
    }, [reload]);

    const fetchUsuarios = async () => {
        setLoading(true);
        try {
            const data = await getUsuarios();
            setUsuarios(data);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            alert('❌ Error al obtener usuarios.');
        } finally {
            setLoading(false);
        }
    };

    // ✅ Eliminar un usuarios
    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar este usuarios?')) {
            try {
                await deleteUsuario(id);
                fetchUsuarios(); // 🔄 Recargar lista
            } catch (error) {
                console.error('Error al eliminar usuarios:', error);
                alert('❌ Error al eliminar el usuarios.');
            }
        }
    };

    // ✅ Filtrado por búsqueda
    const filteredUsuarios = usuarios.filter((usuario) =>
        usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        usuario.correoElectronico.toLowerCase().includes(searchTerm.toLowerCase()) ||
        usuario.rol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="user-list">
            <h2>Lista de Usuarios</h2>

            {/* ✅ Campo de búsqueda */}
            <input
                type="text"
                placeholder="🔎 Buscar por nombre, correo o rol..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {loading ? (
                <p>Cargando usuarios...</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo Electrónico</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsuarios.length > 0 ? (
                        filteredUsuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.correoElectronico}</td>
                                <td>{usuario.rol}</td>
                                <td>
                                    <button onClick={() => onEdit(usuario)}>✏️ Editar</button>
                                    <button onClick={() => handleDelete(usuario.id)}>🗑️ Eliminar</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No se encontraron usuarios.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserList;
