import { useState } from "react";
import RoleTable from "./RoleTable";
import RoleModalForm from "./RoleModalForm";
import "../../../styles/admin/RoleManagement.css";

export default function RoleManagement() {
    const [roles, setRoles] = useState([
        { id: 1, nombre: "Admin", permisos: 10 },
        { id: 2, nombre: "Gestor", permisos: 6 },
        { id: 3, nombre: "Vendedor", permisos: 4 }
    ]);

    const [open, setOpen] = useState(false);

    const agregarRol = (rol) => {
        setRoles([...roles, { ...rol, id: Date.now() }]);
        setOpen(false);
    };

    return (
        <div className="roles-container">
            <div className="roles-header">
                <h2>Gestión de Roles</h2>
                <button onClick={() => setOpen(true)}>+ Nuevo Rol</button>
            </div>

            <RoleTable roles={roles} />
            {open && <RoleModalForm onSave={agregarRol} onClose={() => setOpen(false)} />}
        </div>
    );
}
