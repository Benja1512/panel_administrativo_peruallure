import { useState, useEffect } from "react";

export default function AuditTable({ filters = {} }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // datos simulados (luego conectas backend)
        const logs = [
            { id: 1, usuario: "admin", accion: "login", fecha: "2026-01-10" },
            { id: 2, usuario: "admin", accion: "crear usuario", fecha: "2026-01-11" },
            { id: 3, usuario: "soporte", accion: "editar rol", fecha: "2026-01-12" },
            { id: 4, usuario: "admin", accion: "logout", fecha: "2026-01-13" }
        ];

        let filtrado = logs;

        if (filters.usuario) {
            filtrado = filtrado.filter(l =>
                l.usuario.toLowerCase().includes(filters.usuario.toLowerCase())
            );
        }

        if (filters.accion) {
            filtrado = filtrado.filter(l =>
                l.accion.toLowerCase().includes(filters.accion.toLowerCase())
            );
        }

        if (filters.fecha) {
            filtrado = filtrado.filter(l => l.fecha === filters.fecha);
        }

        setData(filtrado);
    }, [filters]);

    return (
        <table border="1" width="100%" cellPadding="8">
            <thead>
            <tr>
                <th>Usuario</th>
                <th>Acción</th>
                <th>Fecha</th>
            </tr>
            </thead>
            <tbody>
            {data.length === 0 ? (
                <tr>
                    <td colSpan="3" align="center">
                        No hay registros
                    </td>
                </tr>
            ) : (
                data.map(row => (
                    <tr key={row.id}>
                        <td>{row.usuario}</td>
                        <td>{row.accion}</td>
                        <td>{row.fecha}</td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    );
}
