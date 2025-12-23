import React from "react";
import "../../../styles/PedidosPorCategoria.css";

const PedidosPorCategoria = () => {
    return (
        <div className="analytics-card">
            <h3>Pedidos por Categoría</h3>
            <p>
                Distribución de pedidos según categoría de producto para detectar
                patrones de consumo y demanda.
            </p>
            <div className="analytics-placeholder">
                📦 Gráfico Pedidos por Categoría
            </div>
        </div>
    );
};

export default PedidosPorCategoria;
