import React, { useState } from 'react';
import UserList from '../../components/superadmin/UserList';
import UserForm from '../../components/superadmin/UserForm';

const UsuariosPage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [reload, setReload] = useState(false);

    const handleEdit = (user) => {
        setSelectedUser(user);
    };

    const handleSave = () => {
        setSelectedUser(null);
        setReload(!reload); // 🔄 Forzamos la recarga del listado
    };

    return (
        <div>
            <h1>Gestión de Usuarios Globales</h1>
            <UserForm selectedUser={selectedUser} onSave={handleSave} />
            <UserList onEdit={handleEdit} reload={reload} />
        </div>
    );
};

export default UsuariosPage;
