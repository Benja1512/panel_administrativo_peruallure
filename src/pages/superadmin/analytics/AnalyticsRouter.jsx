import { Routes, Route, Navigate } from "react-router-dom";
import AnalyticsPage from "./AnalyticsPage"

// 📌 Sub-páginas por categoría
import AnalyticsClasicos from "./sections/AnalyticsClasicos";
import AnalyticsIA from "./sections/AnalyticsIA";
import AnalyticsLogistica from "./sections/AnalyticsLogistica";
import AnalyticsMarketing from "./sections/AnalyticsMarketing";
import AnalyticsCliente from "./sections/AnalyticsCliente";
import AnalyticsAvanzado from "./sections/AnalyticsAvanzado";
import ProcesamientoPage from "./procesamiento/ProcesamientoPage";
import StockPage from "./stock/StockPage";

const AnalyticsRouter = () => {
    return (
        <Routes>
            {/* Ruta por defecto */}
            <Route index element={<AnalyticsPage />} />

            {/* Subrutas */}
            <Route path="clasicos" element={<AnalyticsClasicos />} />
            <Route path="ia" element={<AnalyticsIA />} />
            <Route path="logistica" element={<AnalyticsLogistica />} />
            <Route path="marketing" element={<AnalyticsMarketing />} />
            <Route path="cliente" element={<AnalyticsCliente />} />
            <Route path="avanzado" element={<AnalyticsAvanzado />} />
            <Route path="procesamiento" element={<ProcesamientoPage />} />
            <Route path="stock" element={<StockPage />} />

            {/* Si escriben algo mal, redirige a analytics */}
            <Route path="*" element={<Navigate to="/superadmin/analytics" replace />} />
        </Routes>
    );
};

export default AnalyticsRouter;
