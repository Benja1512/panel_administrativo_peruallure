import { useState } from "react";
import "../../../styles/admin/RoleModalForm.css";


export default function RoleModalForm({ onSave, onClose }) {
    const [nombre, setNombre] = useState("");
    const [permisos, setPermisos] = useState("");

    const guardar = () => {
        if (!nombre) return;
        onSave({ nombre, permisos });
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h3>Nuevo Rol</h3>

                <input
                    placeholder="Nombre del rol"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Permisos"
                    value={permisos}
                    onChange={(e) => setPermisos(e.target.value)}
                />

                <div className="modal-actions">
                    <button onClick={guardar}>Guardar</button>
                    <button onClick={onClose} className="cancel">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}
