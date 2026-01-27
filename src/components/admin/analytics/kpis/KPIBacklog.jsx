import React from "react";

const KPIBacklog = () => {
    const backlog = 23;

    return (
        <div className="dashboard-card">
            <h3>Backlog operativo</h3>
            <h2 style={{ color: backlog > 20 ? "#dc2626" : "#16a34a" }}>
                {backlog}
            </h2>
            <p style={{ marginTop: 6, color: "#64748b" }}>
                Pedidos pendientes
            </p>
        </div>
    );
};

export default KPIBacklog;
