import React from "react";
import { useNavigate } from "react-router-dom";

const RotacionPromedioCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="kpi clickable"
            onClick={() =>
                navigate("/superadmin/analytics/logistica/rotacion/promedio")
            }
        >
            <span className="kpi-label">Rotación Promedio</span>
            <span className="kpi-value">6.2x</span>
            <span className="kpi-sub">Ver detalle</span>
        </div>
    );
};

export default RotacionPromedioCard;
