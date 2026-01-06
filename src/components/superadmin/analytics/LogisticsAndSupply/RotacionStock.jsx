import { RefreshCw } from "lucide-react";

const RotacionStock = () => {
    return (
        <section className="card">
            <h2 className="card-title">
                <RefreshCw size={20} /> Rotación de Stock
            </h2>

            <p className="card-description">
                Mide cuántas veces se renueva el inventario en un período determinado.
            </p>

            <div className="kpi-grid">
                <div className="kpi">
                    <span className="kpi-label">Rotación Mensual</span>
                    <span className="kpi-value">3.8x</span>
                </div>
                <div className="kpi">
                    <span className="kpi-label">Días en Inventario</span>
                    <span className="kpi-value">26 días</span>
                </div>
            </div>
        </section>
    );
};

export default RotacionStock;
