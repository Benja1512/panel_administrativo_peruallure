import React from "react";
import { RefreshCcw } from "lucide-react";
import SectionLayout from "../SectionLayout";
import "../../../../../styles/RotacionStocks.css";

const RotacionStock = () => {
    return (
        <SectionLayout
            title="Rotación de Stock"
            description="Mide cuántas veces se renueva el inventario en un período determinado."
            icon={<RefreshCcw size={18} />}
        >
            <div className="kpi-grid">
                <div className="kpi">
                    <span className="kpi-label">Rotación Promedio</span>
                    <span className="kpi-value">6.2x</span>
                </div>

                <div className="kpi">
                    <span className="kpi-label">Días en Inventario</span>
                    <span className="kpi-value">58 días</span>
                </div>

                <div className="kpi">
                    <span className="kpi-label">Stock de Baja Rotación</span>
                    <span className="kpi-value warning">12%</span>
                </div>
            </div>

            <div className="placeholder">
                📊 Aquí irá el gráfico de rotación por producto o categoría
            </div>

            <p className="insight">
                📌 La rotación se mantiene en un nivel saludable, reduciendo capital inmovilizado y riesgo de obsolescencia.
            </p>
        </SectionLayout>
    );
};

export default RotacionStock;
