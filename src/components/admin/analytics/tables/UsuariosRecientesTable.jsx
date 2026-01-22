import React from "react";
import "../../../../styles/admin/analytics/tables/tables.css";

const data = [
    { nombre: "Ana Torres", rol: "Cliente", fecha: "Hoy" },
    { nombre: "Luis Gómez", rol: "Vendedor", fecha: "Ayer" },
    { nombre: "Carla Ramos", rol: "Admin", fecha: "Hoy" },
];

const UsuariosRecientesTable = () => (
    <div className="table-card">
        <h4>Usuarios recientes</h4>
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Fecha</th>
            </tr>
            </thead>
            <tbody>
            {data.map((u, i) => (
                <tr key={i}>
                    <td>{u.nombre}</td>
                    <td>{u.rol}</td>
                    <td>{u.fecha}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default UsuariosRecientesTable;
