import { useNavigate } from "react-router-dom";

export default function QuickActions() {
    const navigate = useNavigate();

    return (
        <div className="quick-actions">
            <div className="quick-left">
                <button onClick={() => navigate("/admin/administradores")}>
                    ➕ Nuevo usuario
                </button>

                <button onClick={() => navigate("/admin/roles")}>
                    🛡️ Crear rol
                </button>

                <button onClick={() => navigate("/admin/audit-logs")}>
                    📜 Ver auditoría
                </button>

                <button onClick={() => navigate("/admin/alertas")}>
                    🔔 Centro de alertas
                </button>
            </div>

            <div className="critical-alert">
                🚨 2 errores críticos hoy
                <span onClick={() => navigate("/admin/audit-logs")}>
          Ver detalles →
        </span>
            </div>
        </div>
    );
}
