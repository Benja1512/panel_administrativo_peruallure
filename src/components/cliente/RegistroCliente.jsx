import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const RegistroCliente = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        nombreUsuario: '',
        correoElectronico: '',
        contrasena: '',
        telefono: '',
        ciudad: '',
        estado: '',
        pais: ''
    });

    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('');
        setError('');

        try {
            await axios.post('http://localhost:8081/api/usuarios/registro', formData);
            setMensaje('✅ Registro exitoso. Redirigiendo al login...');
            setTimeout(() => navigate('/login'), 2000); // redirige tras 2 seg
        } catch (err) {
            console.error(err);
            setError('❌ Error al registrar. Verifica los campos.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
            <h2>Registro de Cliente</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                <input type="text" name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} required />
                <input type="text" name="nombreUsuario" placeholder="Nombre de Usuario" value={formData.nombreUsuario} onChange={handleChange} required />
                <input type="email" name="correoElectronico" placeholder="Correo Electrónico" value={formData.correoElectronico} onChange={handleChange} required />
                <input type="password" name="contrasena" placeholder="Contraseña" value={formData.contrasena} onChange={handleChange} required />
                <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
                <input type="text" name="ciudad" placeholder="Ciudad" value={formData.ciudad} onChange={handleChange} />
                <input type="text" name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} />
                <input type="text" name="pais" placeholder="País" value={formData.pais} onChange={handleChange} />

                <button type="submit" style={{ marginTop: '10px' }}>Registrarme</button>
            </form>

            {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <p style={{ marginTop: '15px' }}>
                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
        </div>
    );
};

export default RegistroCliente;
