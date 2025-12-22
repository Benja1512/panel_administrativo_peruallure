// src/components/admin/SettingsForm.jsx
import React from 'react';

const SettingsForm = () => {
    return (
        <form>
            <div>
                <label>Tiempo de Expiración de Sesión:</label>
                <input type="number" min="1" placeholder="Minutos" />
            </div>
            <div>
                <label>Habilitar Modo Mantenimiento:</label>
                <input type="checkbox" />
            </div>
            <button type="submit">Guardar Cambios</button>
        </form>
    );
};

export default SettingsForm;
