import React from "react";
import "../../../../styles/admin/analytics/tables/tables.css";

const data = [
    { evento: "Login fallido", usuario: "admin", hora: "10:32" },
    { evento: "Pedido creado", usuario: "cliente01", hora: "10:10" },
    { evento: "Stock actualizado", usuario: "gestor", hora: "09:45" },
];

const LogsOperativosTable = () => (
    <div className="table-card">
        <h4>Logs operativos</h4>
        <table>
            <thead>
            <tr>
                <th>Evento</th>
                <th>Usuario</th>
                <th>Hora</th>
            </tr>
            </thead>
            <tbody>
            {data.map((l, i) => (
                <tr key={i}>
                    <td>{l.evento}</td>
                    <td>{l.usuario}</td>
                    <td>{l.hora}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default LogsOperativosTable;
