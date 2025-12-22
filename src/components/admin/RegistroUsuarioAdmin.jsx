import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../utils/auth'; // Asegúrate de tener esta función

const RegistroUsuarioAdmin = () => {
    const [form, setForm] = useState({
        nombre: '',
        apellidos: '',
        nombreUsuario: '',
        correoElectronico: '',
        contrasena: '',
        telefono: '',
        ciudad: '',
        estado: '',
        pais: '',
        rol: 'CLIENTE' // por defecto
    });

    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('');
        setError('');

        try {
            const response = await axios.post('http://localhost:8081/api/usuarios/crear', form, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            });

            setMensaje('✅ Usuario creado exitosamente');
            setForm({
                nombre: '',
                apellidos: '',
                nombreUsuario: '',
                correoElectronico: '',
                contrasena: '',
                telefono: '',
                ciudad: '',
                estado: '',
                pais: '',
                rol: 'CLIENTE'
            });
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || '❌ Error al crear usuario');
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
            <h2>Crear Usuario (Solo SUPER_ADMIN)</h2>
            <form onSubmit={handleSubmit}>
                {[
                    { label: 'Nombre', name: 'nombre' },
                    { label: 'Apellidos', name: 'apellidos' },
                    { label: 'Nombre de Usuario', name: 'nombreUsuario' },
                    { label: 'Correo Electrónico', name: 'correoElectronico', type: 'email' },
                    { label: 'Contraseña', name: 'contrasena', type: 'password' },
                    { label: 'Teléfono', name: 'telefono' },
                    { label: 'Ciudad', name: 'ciudad' },
                    { label: 'Estado', name: 'estado' },
                    { label: 'País', name: 'pais' }
                ].map(({ label, name, type = 'text' }) => (
                    <div key={name} style={{ marginBottom: 10 }}>
                        <label>{label}:</label><br />
                        <input
                            type={type}
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            required={['nombre', 'apellidos', 'nombreUsuario', 'correoElectronico', 'contrasena'].includes(name)}
                            style={{ width: '100%' }}
                        />
                    </div>
                ))}

                <div style={{ marginBottom: 10 }}>
                    <label>Rol:</label><br />
                    <select name="rol" value={form.rol} onChange={handleChange} style={{ width: '100%' }}>
                        <option value="CLIENTE">CLIENTE</option>
                        <option value="GESTOR">GESTOR</option>
                        <option value="VENDEDOR">VENDEDOR</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                    </select>
                </div>

                <button type="submit">Crear Usuario</button>
            </form>

            {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default RegistroUsuarioAdmin;
