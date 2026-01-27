import { useState } from "react";

export default function Administradores() {
    const [admins] = useState([
        { id: 1, nombre: "Admin Principal", email: "admin@empresa.com" },
        { id: 2, nombre: "Soporte", email: "soporte@empresa.com" }
    ]);

    return (
        <div>
            <h2>Listado de Administradores</h2>

            <table border="1" cellPadding="8" style={{ marginTop: 10 }}>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {admins.map((a) => (
                    <tr key={a.id}>
                        <td>{a.nombre}</td>
                        <td>{a.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

