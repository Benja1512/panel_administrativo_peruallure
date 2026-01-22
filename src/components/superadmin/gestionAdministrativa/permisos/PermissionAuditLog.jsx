import { useEffect, useState } from "react";

/*
  Lee auditoría desde localStorage (modo DEMO)
  Estructura:
  pa_permisos_demo_<tenantId> = {
    audit: {
      role_admin: [
        { id, date, actor, action }
      ]
    }
  }
*/

const PermissionAuditLog = ({ tenantId, roleId }) => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        if (!tenantId || !roleId) {
            setLogs([]);
            return;
        }

        try {
            const raw = localStorage.getItem(`pa_permisos_demo_${tenantId}`);
            if (!raw) {
                setLogs([]);
                return;
            }

            const parsed = JSON.parse(raw);
            const roleLogs = parsed.audit?.[roleId] || [];
            setLogs(roleLogs);
        } catch (e) {
            console.warn("Audit log parse error", e);
            setLogs([]);
        }
    }, [tenantId, roleId]);

    if (!roleId) return null;

    return (
        <div className="ap-card">
            <label className="ap-label">📜 Auditoría de cambios</label>

            {!logs.length && (
                <div className="ap-muted">
                    No hay registros de auditoría para este rol todavía.
                </div>
            )}

            {logs.length > 0 && (
                <ul className="ap-audit-list">
                    {logs.map((log) => (
                        <li key={log.id} className="ap-audit-item">
                            <div className="ap-audit-date">{log.date}</div>
                            <div className="ap-audit-text">
                                <b>{log.actor}</b> — {log.action}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PermissionAuditLog;
