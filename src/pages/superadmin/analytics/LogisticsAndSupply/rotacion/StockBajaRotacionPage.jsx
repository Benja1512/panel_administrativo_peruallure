import React from "react";
import { AlertTriangle } from "lucide-react";

const StockBajaRotacionPage = () => {
    return (
        <div className="analytics-page">
            <h1>
                <AlertTriangle size={22} style={{ marginRight: 8 }} />
                Productos Críticos
            </h1>

            <p>
                Listado de productos con bajo nivel de stock o
                riesgo de obsolescencia.
            </p>

            {/* 🔴 Aquí luego irá la tabla */}
            <div className="placeholder-box">
                Tabla de productos críticos (pendiente)
            </div>
        </div>
    );
};

export default StockBajaRotacionPage;
