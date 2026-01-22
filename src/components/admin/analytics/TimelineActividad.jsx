import React from "react";

const eventos = [
    { hora: "10:21", texto: "Login Juan" },
    { hora: "10:18", texto: "Pedido creado" },
    { hora: "10:10", texto: "Error API" },
    { hora: "09:58", texto: "Backup finalizado" },
];

const TimelineActividad = () => {
    return (
        <div className="dashboard-card">
            <h3>Actividad última hora</h3>

            <ul style={{ marginTop: 12 }}>
                {eventos.map((e, i) => (
                    <li
                        key={i}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "8px 0",
                            borderBottom: "1px solid #e5e7eb",
                            fontSize: 14,
                        }}
                    >
                        <span>{e.texto}</span>
                        <span style={{ color: "#64748b" }}>{e.hora}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TimelineActividad;
