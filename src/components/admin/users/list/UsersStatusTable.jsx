import React from "react";
import "../../../../styles/admin/users/usersStatus.css";

const data = [
    { nombre: "Admin Principal", estado: "Activo" },
    { nombre: "Soporte", estado: "Activo" },
    { nombre: "Juan", estado: "Bloqueado" }
];

export default function UsersStatusTable() {
    return (
        <div className="table-card">
            <h4>Estado de usuarios</h4>
            <table>
                <thead>
                <tr><th>Usuario</th><th>Estado</th></tr>
                </thead>
                <tbody>
                {data.map((u,i)=>(
                    <tr key={i}>
                        <td>{u.nombre}</td>
                        <td className={u.estado === "Activo" ? "ok" : "bad"}>{u.estado}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
