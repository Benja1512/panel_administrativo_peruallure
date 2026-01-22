import { useState } from "react";
import "../../../styles/admin/SettingsForm.css";

export default function SettingsForm() {
    const [email, setEmail] = useState("");

    return (
        <div className="settings-form">
            <h2>Configuración</h2>
            <input
                placeholder="Email de notificaciones"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button>Guardar</button>
        </div>
    );
}
