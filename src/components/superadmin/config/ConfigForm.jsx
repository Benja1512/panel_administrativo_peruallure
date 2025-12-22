// src/components/superadmin/ConfigForm.jsx
import React, { useState, useEffect } from 'react';
import superAdminService from '../../services/superAdminService';
import './ConfigForm.css';

const ConfigForm = () => {
    const [config, setConfig] = useState({
        maxSessions: 5,
        passwordPolicy: "Strong",
        maintenanceMode: false,
    });

    useEffect(() => {
        const fetchConfig = async () => {
            const data = await superAdminService.getSystemConfig();
            setConfig(data);
        };
        fetchConfig();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setConfig({ ...config, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await superAdminService.updateSystemConfig(config);
        alert("Configuración Actualizada");
    };

    return (
        <form className="config-form" onSubmit={handleSubmit}>
            <h3>⚙️ Configuración Global del Sistema</h3>

            <label>Máximo de Sesiones por Usuario:</label>
            <input
                type="number"
                name="maxSessions"
                value={config.maxSessions}
                onChange={handleChange}
            />

            <label>Política de Contraseña:</label>
            <select name="passwordPolicy" value={config.passwordPolicy} onChange={handleChange}>
                <option value="Strong">Fuerte</option>
                <option value="Medium">Media</option>
                <option value="Weak">Débil</option>
            </select>

            <label>
                <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={config.maintenanceMode}
                    onChange={handleChange}
                />
                Modo Mantenimiento
            </label>

            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default ConfigForm;
