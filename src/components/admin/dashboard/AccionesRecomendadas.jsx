import { useNavigate } from "react-router-dom";

export default function AccionesRecomendadas() {
    const navigate = useNavigate();

    return (
        <div className="acciones-recomendadas">
            <h3>Acciones recomendadas</h3>

            <div onClick={() => navigate("/admin/audit-logs")}>
                ⚠️ Revisar errores de API
            </div>

            <div onClick={() => navigate("/admin/administradores")}>
                👤 Auditar usuario Carlos
            </div>

            <div onClick={() => navigate("/admin/reportes")}>
                💾 Ejecutar backup manual
            </div>
        </div>
    );
}
