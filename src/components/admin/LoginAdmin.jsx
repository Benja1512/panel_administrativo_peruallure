import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/auth/login', {
                nombreUsuarioOCorreo: correoElectronico, // <-- lo que el backend espera
                contrasena
            });


            const { accessToken } = response.data;
            localStorage.setItem('token', accessToken);

            // ✅ Navegar al dashboard de administradores
            navigate('/administradores');
        } catch (err) {
            console.error(err);
            setError('❌ Error de autenticación. Verifica tus credenciales.');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Login Administrador</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label>Correo Electrónico:</label>
                        <input
                            type="email"
                            value={correoElectronico}
                            onChange={(e) => setCorreoElectronico(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" style={styles.button}>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    card: {
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        width: '350px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '25px',
        color: '#333',
    },
    inputGroup: {
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '14px',
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#e53935',
        border: 'none',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default LoginAdmin;
