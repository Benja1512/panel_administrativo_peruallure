import React, { useState } from "react";
import superAdminService from "../../../../services/superAdminService";

const PermissionForm = ({ onSave }) => {
    const [permiso, setPermiso] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await superAdminService.createPermission({
                name: permiso,
                description: descripcion,
            });

            onSave();
            setPermiso("");
            setDescripcion("");
        } catch (error) {
            console.error(error);
            alert("Error al crear el permiso");
        }
    };

    return (
        <form className="permission-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre del permiso"
                value={permiso}
                onChange={(e) => setPermiso(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <button type="submit">Crear permiso</button>
        </form>
    );
};

export default PermissionForm;
