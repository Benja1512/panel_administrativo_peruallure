import React from "react";
import "../../../styles/soporte.css";

const TicketTable = () => {
    return (
        <div className="soporte-panel">
            <h2>🆘 Soporte Técnico</h2>
            <p>Revisa los tickets de soporte registrados por los usuarios.</p>

            <div className="acciones">
                <button className="btn btn-primary">+ Nuevo Ticket</button>
                {/* Aquí se podría abrir el modal NuevoTicketModal */}
            </div>

            <div className="tabla-tickets">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Asunto</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>#001</td>
                        <td>admin@empresa.com</td>
                        <td>Error al ingresar</td>
                        <td><span className="badge badge-warning">Pendiente</span></td>
                        <td>09/01/2026</td>
                    </tr>
                    <tr>
                        <td>#002</td>
                        <td>cliente@correo.com</td>
                        <td>No llega confirmación</td>
                        <td><span className="badge badge-success">Resuelto</span></td>
                        <td>08/01/2026</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TicketTable;
