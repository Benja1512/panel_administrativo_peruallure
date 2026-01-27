import React from "react";

export default function UsersEmptyState() {
    return (
        <div style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
            <h4>No hay usuarios aún</h4>
            <p>Comienza creando el primer usuario del sistema.</p>
        </div>
    );
}
