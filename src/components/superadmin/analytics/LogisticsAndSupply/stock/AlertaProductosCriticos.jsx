import React from "react";
import { useNavigate } from "react-router-dom";

const AlertaInventario = () => {
    const navigate = useNavigate();

    return (
        <div className="alerta-inventario">
            <h3 className="section-title">⚠️ Alerta de Inventario</h3>
            <p><strong>6 productos</strong> se encuentran por debajo del stock mínimo. Revisión recomendada.</p>

            <button
                className="alert-action"
                onClick={() =>
                    navigate("/superadmin/analytics/logistica/stock/productos-criticos")
                }
            >
                Ver productos críticos
            </button>
        </div>
    );
};

export default AlertaInventario;
