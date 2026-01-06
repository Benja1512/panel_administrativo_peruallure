import { Clock } from "lucide-react";

const TiempoProcesamiento = () => {
    return (
        <section className="card">
            <h2 className="card-title">
                <Clock size={20} /> Tiempo de Procesamiento
            </h2>

            <p className="card-description">
                Duración promedio desde la orden hasta la preparación.
            </p>

            <div className="kpi-grid">
                <div className="kpi">
                    <span className="kpi-label">Tiempo Promedio</span>
                    <span className="kpi-value">2.3 hrs</span>
                </div>
                <div className="kpi">
                    <span className="kpi-label">Órdenes Retrasadas</span>
                    <span className="kpi-value warning">4%</span>
                </div>
            </div>

            <div className="placeholder">
                📊 Aquí irá el gráfico de tiempos
            </div>
        </section>
    );
};

export default TiempoProcesamiento;
