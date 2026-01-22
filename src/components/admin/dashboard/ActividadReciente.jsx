import React from "react";
import "../../../styles/admin/dashboard/ActividadReciente.css";

const actividades = [
    { usuario: "Juan", accion: "Login", fecha: "Hoy 10:21", ip: "192.168.1.10" },
    { usuario: "Ana", accion: "Error API", fecha: "Hoy 09:58", ip: "10.0.0.5" },
    { usuario: "Carlos", accion: "Creó pedido", fecha: "Ayer 18:42", ip: "192.168.1.22" },
    { usuario: "María", accion: "Actualizó cliente", fecha: "Ayer 17:30", ip: "172.16.0.3" },
];

export default function ActividadReciente() {
    return (
        <div className="actividad-card">
            <h3>Actividad reciente</h3>

            <table className="actividad-table">
                <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Acción</th>
                    <th>Fecha</th>
                    <th>IP</th>
                </tr>
                </thead>
                <tbody>
                {actividades.map((a, i) => (
                    <tr key={i}>
                        <td>{a.usuario}</td>
                        <td>
                <span
                    className={`tag ${
                        a.accion.toLowerCase().includes("error") ? "error" : "ok"
                    }`}
                >
                  {a.accion}
                </span>
                        </td>
                        <td>{a.fecha}</td>
                        <td>{a.ip}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
