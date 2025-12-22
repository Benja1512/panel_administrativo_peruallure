import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoadingOverlay from '../../components/shared/LoadingOverlay';

const CambioContraseñaPage = () => {
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8081/api/auth/change-password', {
                correoElectronico,
                nuevaContrasena
            });

            if (response.status === 200) {
                toast.success('✅ Contraseña actualizada correctamente.');
            }
        } catch (err) {
            console.error(err);
            toast.error('❌ No se pudo actualizar la contraseña.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <LoadingOverlay message="Actualizando contraseña..." />}
            <div style={styles.container}>
                <div style={styles.card}>
                    <h2>Cambio de Contraseña</h2>
                    <form onSubmit={handlePasswordChange}>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={correoElectronico}
                            onChange={(e) => setCorreoElectronico(e.target.value)}
                            required
                            style={styles.input}
                            disabled={loading}
                        />
                        <input
                            type="password"
                            placeholder="Nueva Contraseña"
                            value={nuevaContrasena}
                            onChange={(e) => setNuevaContrasena(e.target.value)}
                            required
                            style={styles.input}
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            style={styles.button}
                            disabled={loading}
                        >
                            Actualizar Contraseña
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CambioContraseñaPage;
