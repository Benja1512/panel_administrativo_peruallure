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




// Wrappers de páginas de marketing (NO componentes)
import MarketingPage from "./marketing/MarketingPage";
import CalendarioCampaniasPage from "./marketing/CalendarioPage";
import ROICampaniasPage from "./marketing/ROICampaniasPage";
import CACPage from "./marketing/CACPage";
import EmbudoConversionPage from "./marketing/EmbudoConversionPage";
import RentabilidadCanalPage from "./marketing/RentabilidadCanalPage";
import SegmentosClientesPage from "./marketing/SegmentosClientesPage";
import CanalOrigenClientesPage from "./marketing/CanalOrigenClientesPage";
import TasaRecompraPage from "./marketing/TasaRecompraPage";
import ChurnClientesPage from "./marketing/ChurnClientesPage";
import SatisfaccionClientePage from "./marketing/SatisfaccionClientePage";
import SentimientoResenasPage from "./marketing/SentimientoResenasPage";
import PanelVariacionMensualPage from "./marketing/PanelVariacionMensualPage";
import CanalesContactoPreferidosPage from "./marketing/CanalesContactoPreferidosPage";
import ChurnClientesPage from "../../../pages/superadmin/analytics/marketing/ChurnClientesPage";
import EmbudoConversionPage from "../../../pages/superadmin/analytics/marketing/EmbudoConversionPage";
import FrecuenciaCompraPromedioPage from "../../../pages/superadmin/analytics/marketing/FrecuenciaCompraPromedioPage";
import PanelVariacionMensualPage from "../../../pages/superadmin/analytics/marketing/PanelVariacionMensualPage";
import RentabilidadCanalPage from "../../../pages/superadmin/analytics/marketing/RentabilidadCanalPage";
import ROICampaniasPage from "../../../pages/superadmin/analytics/marketing/ROICampaniasPage";
import SatisfaccionClientePage from "../../../pages/superadmin/analytics/marketing/SatisfaccionClientePage";
import SegmentosClientesPage from "../../../pages/superadmin/analytics/marketing/SegmentosClientesPage";
import SentimientoResenasPage from "../../../pages/superadmin/analytics/marketing/SentimientoResenasPage";



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



            <Routes>
                {/*  Ruta principal de marketing */}
                <Route path="/superadmin/analytics/marketing" element={<MarketingPage />} />

                {/*  Subpáginas  marketing individuales */}
                <Route path="/superadmin/analytics/marketing/calendario" element={<CalendarioCampaniasPage />} />
                <Route path="/superadmin/analytics/marketing/roi" element={<ROICampaniasPage />} />
                <Route path="/superadmin/analytics/marketing/cac" element={<CACPage />} />
                <Route path="/superadmin/analytics/marketing/embudo" element={<EmbudoConversionPage />} />
                <Route path="/superadmin/analytics/marketing/canal-rentabilidad" element={<RentabilidadCanalPage />} />
                <Route path="/superadmin/analytics/marketing/segmentos" element={<SegmentosClientesPage />} />
                <Route path="/superadmin/analytics/marketing/canales-origen" element={<CanalOrigenClientesPage />} />
                <Route path="/superadmin/analytics/marketing/recompra" element={<TasaRecompraPage />} />
                <Route path="/superadmin/analytics/marketing/churn" element={<ChurnClientesPage />} />
                <Route path="/superadmin/analytics/marketing/satisfaccion" element={<SatisfaccionClientePage />} />
                <Route path="/superadmin/analytics/marketing/sentimiento" element={<SentimientoResenasPage />} />
                <Route path="/superadmin/analytics/marketing/variacion-mensual" element={<PanelVariacionMensualPage />} />
                <Route path="/superadmin/analytics/marketing/canales-contacto" element={<CanalesContactoPreferidosPage />}  />
                <Route path="/superadmin/analytics/marketing/churn" element={<ChurnClientesPage />} />
                <Route path="/superadmin/analytics/embudo-conversion"   element={<EmbudoConversionPage />}/>
                <Route path="frecuencia-compra" element={<FrecuenciaCompraPromedioPage />} />
                <Route path="variacion-mensual" element={<PanelVariacionMensualPage />} />
                <Route path="rentabilidad-canal" element={<RentabilidadCanalPage />} />
                <Route path="roi-campanias" element={<ROICampaniasPage />} />
                <Route path="satisfaccion-cliente" element={<SatisfaccionClientePage />} />
                <Route path="segmentos-clientes" element={<SegmentosClientesPage />} />
                <Route path="sentimiento-resenas" element={<SentimientoResenasPage />}
                />

            </Routes>

            {/* Si escriben algo mal, redirige a analytics */}
            <Route path="*" element={<Navigate to="/superadmin/analytics" replace />} />
        </Routes>
    );
};

export default AnalyticsRouter;
