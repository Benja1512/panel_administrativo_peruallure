import React from "react";

const KPISaludSistema = () => {
    const score = 92;

    return (
        <div className="dashboard-card">
            <h3>Salud del sistema</h3>
            <h2 style={{ color: score > 85 ? "#16a34a" : "#f59e0b" }}>
                {score}/100
            </h2>
            <p style={{ marginTop: 8, color: "#64748b" }}>
                Estado general del sistema
            </p>
        </div>
    );
};

export default KPISaludSistema;
