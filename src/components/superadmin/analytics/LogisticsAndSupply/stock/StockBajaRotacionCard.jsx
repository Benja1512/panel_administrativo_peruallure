import React from "react";
import { useNavigate } from "react-router-dom";

const StockBajaRotacionCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="kpi clickable warning"
            onClick={() =>
                navigate("/superadmin/analytics/logistica/rotacion/baja-rotacion")
            }
        >
            <span className="kpi-label">Stock de Baja Rotación</span>
            <span className="kpi-value">12%</span>
            <span className="kpi-sub">Productos inmovilizados</span>
        </div>
    );
};

export default StockBajaRotacionCard;
