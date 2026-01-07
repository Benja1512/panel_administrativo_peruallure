import React from "react";
import RotacionStock from "../../../../components/superadmin/analytics/LogisticsAndSupply/stock/RotacionStock";

const StockPage = () => {
    return (
        <div className="analytics-page">
            {/* Título de página */}
            <h1>Rotación de Stock</h1>
            <p>Mide cuántas veces se renueva el inventario en un período determinado.</p>

            {/* Sección */}
            <RotacionStock />
        </div>
    );
};

export default StockPage;
