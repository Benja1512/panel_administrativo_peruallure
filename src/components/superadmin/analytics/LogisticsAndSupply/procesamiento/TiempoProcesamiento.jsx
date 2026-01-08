import { useNavigate } from "react-router-dom";
import KpiCard from '../../../../../components/shared/KpiCard';

const TiempoProcesamientoKPI = () => {
    const navigate = useNavigate();

    return (
        <KpiCard
            title="Tiempo de Procesamiento"
            value="2.3 hrs"
            sub="Órdenes logísticas"
            onClick={() =>
                navigate("/superadmin/analytics/procesamiento")
            }
        />
    );
};

export default TiempoProcesamientoKPI;
