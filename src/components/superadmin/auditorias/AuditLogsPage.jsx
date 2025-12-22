import React, { useEffect, useState } from "react";
import "../../styles/AuditLogsPage.css";

const DEMO_MODE = true;

const AuditLogsPage = () => {
    const [logs, setLogs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (DEMO_MODE) {
            const demoLogs = [
                { id: 1, usuario: "Benjamin Ontiveros", rol: "SUPER_ADMIN", accion: "Creó un nuevo rol CLIENTE", fecha: "2025-10-12 14:23", ip: "192.168.1.10" },
                { id: 2, usuario: "Luisa Gonzales", rol: "GESTOR", accion: "Actualizó permisos de VENDEDOR", fecha: "2025-10-12 14:30", ip: "192.168.1.25" },
                { id: 3, usuario: "Carlos Ruiz", rol: "ADMIN", accion: "Eliminó usuario externo Jose López", fecha: "2025-10-11 17:42", ip: "192.168.1.15" },
                { id: 4, usuario: "Andrea Pérez", rol: "AUDITOR", accion: "Visualizó reportes del sistema", fecha: "2025-10-10 11:18", ip: "192.168.1.20" },
            ];
            setLogs(demoLogs);
        }
    }, []);

    const filteredLogs = logs.filter(
        (log) =>
            log.usuario.toLowerCase().includes(search.toLowerCase()) ||
            log.rol.toLowerCase().includes(search.toLowerCase()) ||
            log.accion.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="audit-page">
            <h2>
                Auditorías del Sistema{" "}
                {DEMO_MODE && <span className="demo-label">(Modo Demo)</span>}
            </h2>

            <p className="subtitle">
                Historial de actividades realizadas por los usuarios en el sistema.
            </p>

            <div className="audit-search">
                <input
                    type="text"
                    placeholder="Buscar por usuario, rol o acción..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <table className="audit-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Acción</th>
                    <th>Fecha</th>
                    <th>IP</th>
                </tr>
                </thead>
                <tbody>
                {filteredLogs.length > 0 ? (
                    filteredLogs.map((log) => (
                        <tr key={log.id}>
                            <td>{log.id}</td>
                            <td>{log.usuario}</td>
                            <td>{log.rol}</td>
                            <td>{log.accion}</td>
                            <td>{log.fecha}</td>
                            <td>{log.ip}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="no-data">
                            No hay registros de auditoría.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default AuditLogsPage;
