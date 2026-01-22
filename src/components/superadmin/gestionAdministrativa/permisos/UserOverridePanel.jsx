import { useEffect, useState } from "react";
import "../../../../styles/gestionAdministrativa/permisos/UserOverridePanel.css";

/**
 * Permite overrides por usuario (excepciones al rol)
 */
const UserOverridePanel = ({ roleId }) => {
    const [users, setUsers] = useState([]); // 🔥 SIEMPRE array
    const [overrides, setOverrides] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!roleId) {
            setUsers([]);
            return;
        }

        setLoading(true);

        // DEMO DATA (luego API)
        const demoUsers = [
            { id: "u1", name: "Juan Pérez" },
            { id: "u2", name: "Ana López" },
        ];

        const demoOverrides = {
            u1: ["ORDERS_EDIT"],
            u2: [],
        };

        setTimeout(() => {
            setUsers(demoUsers);
            setOverrides(demoOverrides);
            setLoading(false);
        }, 300);
    }, [roleId]);

    const toggle = (userId, perm) => {
        setOverrides((prev) => ({
            ...prev,
            [userId]: prev[userId]?.includes(perm)
                ? prev[userId].filter((p) => p !== perm)
                : [...(prev[userId] || []), perm],
        }));
    };

    if (!roleId) return null;

    return (
        <div className="ap-card">
            <h4>👤 Overrides por usuario</h4>

            {loading && <p>Cargando usuarios…</p>}

            {!loading && users.length === 0 && (
                <p className="ap-muted">No hay usuarios para este rol.</p>
            )}

            {users.map((u) => (
                <div key={u.id} className="override-user">
                    <strong>{u.name}</strong>

                    <div className="override-actions">
                        <label>
                            <input
                                type="checkbox"
                                checked={overrides[u.id]?.includes("ORDERS_EDIT") || false}
                                onChange={() => toggle(u.id, "ORDERS_EDIT")}
                            />
                            Permitir editar pedidos
                        </label>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserOverridePanel;
