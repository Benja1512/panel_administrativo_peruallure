import { useNavigate } from "react-router-dom";
import KpiCard from "@/components/shared/KpiCard";

const DiasInventarioKPI = () => {
    const navigate = useNavigate();

    return (
        <KpiCard
            title="Días en Inventario"
            value="26 días"
            sub="Cobertura promedio"
            onClick={() =>
                navigate("/superadmin/analytics/logistica/dias-inventario")
            }
        />
    );
};

export default DiasInventarioKPI;
