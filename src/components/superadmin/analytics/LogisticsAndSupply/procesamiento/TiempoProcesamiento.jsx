import { Clock } from "lucide-react";
import SectionLayout from "../SectionLayout";

const TiempoProcesamiento = () => {
    return (
        <SectionLayout
            title="Tiempo de Procesamiento"
            description="Duración promedio desde la orden hasta la preparación."
            icon={<Clock size={18} />}
        >
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
        </SectionLayout>
    );
};

export default TiempoProcesamiento;
