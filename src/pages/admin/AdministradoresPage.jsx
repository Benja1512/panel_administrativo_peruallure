import React from 'react';
import Administradores from '../components/admin/Administradores';
import LogoutButton from '../components/cliente/LogoutButton';

const AdministradoresPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1> Administradores</h1>
                <LogoutButton />
            </div>

            <Administradores />
        </div>
    );
};

export default AdministradoresPage;
