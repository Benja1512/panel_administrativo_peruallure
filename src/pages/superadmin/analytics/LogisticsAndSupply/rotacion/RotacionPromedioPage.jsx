import React from "react";
import { useNavigate } from "react-router-dom";

const DiasInventarioPage = () => {
    const navigate = useNavigate();

    return (
        <div className="analytics-page">
            <h1>Días en Inventario</h1>
            <p>Tiempo promedio que los productos permanecen almacenados.</p>

            <button
                className="analytics-button"
                onClick={() =>
                    navigate("/superadmin/analytics/logistica/stock")
                }
            >
                Ir a Rotación de Stock
            </button>
        </div>
    );
};

export default DiasInventarioPage;
