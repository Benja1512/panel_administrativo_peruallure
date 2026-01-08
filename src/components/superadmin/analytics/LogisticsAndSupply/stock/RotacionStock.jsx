import { useNavigate } from "react-router-dom";
import KpiCard from '../../../../shared/KpiCard';

const RotacionStock = () => {
    const navigate = useNavigate();

    return (
        <div className="kpi-grid">
            <KpiCard
                title="Rotación Promedio"
                value="6.2x"
                onClick={() => navigate("/superadmin/analytics/logistica/rotacion/promedio")}
            />
            <KpiCard
                title="Días en Inventario"
                value="26 días"
                onClick={() => navigate("/superadmin/analytics/logistica/rotacion/dias")}
            />
            <KpiCard
                title="Stock Baja Rotación"
                value="8 productos"
                onClick={() => navigate("/superadmin/analytics/logistica/rotacion/baja")}
            />
        </div>
    );
};

export default RotacionStock;