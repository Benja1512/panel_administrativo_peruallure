import { Routes, Route, Navigate } from "react-router-dom";
import AnalyticsPage from "./AnalyticsPage"

// 📌 Sub-páginas por categoría
import AnalyticsClasicos from "./sections/AnalyticsClasicos";
import AnalyticsIA from "./sections/AnalyticsIA";
import AnalyticsLogistica from "./sections/AnalyticsLogistica";
import AnalyticsMarketing from "./sections/AnalyticsMarketing";
import AnalyticsCliente from "./sections/AnalyticsCliente";
import AnalyticsAvanzado from "./sections/AnalyticsAvanzado";
import ProcesamientoPage from "./LogisticsAndSupply/ProcesamientoPage";
import ProductosCriticosPage from "./stock/ProductosCriticosPage";


// 📌 Sub-páginas por stock
import StockPage from "./stock/StockPage";



// 📌 Sub-páginas de rotación (CORREGIDO ❗)
import RotacionStockPage from "./LogisticsAndSupply/RotacionStockPage";
import RotacionPromedioPage from "./LogisticsAndSupply/rotacion/RotacionPromedioPage";
import DiasInventarioPage from "./LogisticsAndSupply/rotacion/DiasInventarioPage";
import StockBajaRotacionPage from "./LogisticsAndSupply/rotacion/StockBajaRotacionPage";

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

            {/* Rotación de stock */}
            <Route path="logistica/stock" element={<RotacionStockPage />} />
            <Route path="logistica/dias-inventario" element={<DiasInventarioPage />} />
            <Route path="logistica/stock-baja-rotacion" element={<StockBajaRotacionPage />} />

            <Route path="logistica/rotacion/promedio" element={<RotacionPromedioPage />} />
            <Route path="logistica/rotacion/dias" element={<DiasInventarioPage />} />
            <Route path="logistica/rotacion/baja" element={<StockBajaRotacionPage />} />

            <Route path="logistica/stock/productos-criticos" element={<ProductosCriticosPage />} />

            {/* Si escriben algo mal, redirige a analytics */}
            <Route path="*" element={<Navigate to="/superadmin/analytics" replace />} />
        </Routes>
    );
};

export default AnalyticsRouter;
