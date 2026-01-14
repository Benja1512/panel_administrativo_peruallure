import { Routes, Route, Navigate } from "react-router-dom";
import AnalyticsPage from "./AnalyticsPage";

/* === SECCIONES PRINCIPALES === */
import AnalyticsClasicos from "./sections/AnalyticsClasicos";
import AnalyticsIA from "./sections/AnalyticsIA";
import AnalyticsLogistica from "./sections/AnalyticsLogistica";
import AnalyticsMarketing from "./sections/AnalyticsMarketing";
import AnalyticsCliente from "./sections/AnalyticsCliente";
import AnalyticsAvanzado from "./sections/AnalyticsAvanzado";

/* === LOGÍSTICA === */
import ProcesamientoPage from "./LogisticsAndSupply/ProcesamientoPage";
import RotacionStockPage from "./LogisticsAndSupply/RotacionStockPage";
import RotacionPromedioPage from "./LogisticsAndSupply/rotacion/RotacionPromedioPage";
import DiasInventarioPage from "./LogisticsAndSupply/rotacion/DiasInventarioPage";
import StockBajaRotacionPage from "./LogisticsAndSupply/rotacion/StockBajaRotacionPage";

/* === STOCK === */
import StockPage from "./stock/StockPage";
import ProductosCriticosPage from "./stock/ProductosCriticosPage";

/* === MARKETING (WRAPPERS) === */
import MarketingPage from "./marketing/MarketingPage";
import CalendarioCampaniasPage from "./marketing/CalendarioPage";
import ROICampaniasPage from "./marketing/ROICampaniasPage";
import CACPage from "./marketing/CACPage";
import EmbudoConversionPage from "./marketing/EmbudoConversionPage";
import RentabilidadCanalPage from "./marketing/RentabilidadCanalPage";
import SegmentosClientesPage from "./marketing/SegmentosClientesPage";
import CanalOrigenClientesPage from "./marketing/CanalOrigenClientesPage";
import TasaRecompraPage from "./marketing/TasaRecompraPage";
import SatisfaccionClientePage from "./marketing/SatisfaccionClientePage";
import SentimientoResenasPage from "./marketing/SentimientoResenasPage";
import PanelVariacionMensualPage from "./marketing/PanelVariacionMensualPage";
import CanalesContactoPreferidosPage from "./marketing/CanalesContactoPreferidosPage";
import ChurnClientesPage from "./marketing/ChurnClientesPage";
import VentasPorCategoriaPage from "./marketing/VentasPorCategoriaPage";
import TopProductosPage from "./marketing/TopProductosPage";
import ClientesNuevosVsRecurrentesPage from "./marketing/ClientesNuevosVsRecurrentesPage";
import CLV_LTVPage from "./marketing/CLV_LTVPage";
import CohortesRecompraPage from "./marketing/CohortesRecompraPage";
import ComparativaVendedoresPage from "./marketing/ComparativaVendedoresPage";
import FrecuenciaCompraPromedioPage from "./marketing/FrecuenciaCompraPromedioPage";
import ClientesTopLTVPage from "./marketing/ClientesTopLTVPage";
import ProductividadVendedor from "../../../components/superadmin/analytics/ProductividadVendedor";

const AnalyticsRouter = () => {
    return (
        <Routes>
            {/* ===== ROOT ===== */}
            <Route index element={<AnalyticsPage />} />

            {/* ===== SECCIONES ===== */}
            <Route path="clasicos" element={<AnalyticsClasicos />} />
            <Route path="ia" element={<AnalyticsIA />} />
            <Route path="logistica" element={<AnalyticsLogistica />} />
            <Route path="marketing" element={<AnalyticsMarketing />} />
            <Route path="cliente" element={<AnalyticsCliente />} />
            <Route path="avanzado" element={<AnalyticsAvanzado />} />

            {/* ===== LOGÍSTICA ===== */}
            <Route path="procesamiento" element={<ProcesamientoPage />} />
            <Route path="logistica/stock" element={<RotacionStockPage />} />
            <Route path="logistica/rotacion/promedio" element={<RotacionPromedioPage />} />
            <Route path="logistica/rotacion/dias" element={<DiasInventarioPage />} />
            <Route path="logistica/rotacion/baja" element={<StockBajaRotacionPage />} />
            <Route path="logistica/stock/productos-criticos" element={<ProductosCriticosPage />} />

            {/* ===== STOCK ===== */}
            <Route path="stock" element={<StockPage />} />

            {/* ===== MARKETING ===== */}
            <Route path="marketing">
                <Route index element={<MarketingPage />} />

                <Route path="calendario" element={<CalendarioCampaniasPage />} />
                <Route path="roi" element={<ROICampaniasPage />} />
                <Route path="cac" element={<CACPage />} />
                <Route path="embudo" element={<EmbudoConversionPage />} />
                <Route path="canal-rentabilidad" element={<RentabilidadCanalPage />} />
                <Route path="segmentos" element={<SegmentosClientesPage />} />
                <Route path="canales-origen" element={<CanalOrigenClientesPage />} />
                <Route path="canales-contacto" element={<CanalesContactoPreferidosPage />} />
                <Route path="recompra" element={<TasaRecompraPage />} />
                <Route path="churn" element={<ChurnClientesPage />} />
                <Route path="satisfaccion" element={<SatisfaccionClientePage />} />
                <Route path="sentimiento" element={<SentimientoResenasPage />} />
                <Route path="variacion-mensual" element={<PanelVariacionMensualPage />} />
                <Route path="frecuencia-compra" element={<FrecuenciaCompraPromedioPage />} />
                <Route path="ventas-por-categoria" element={<VentasPorCategoriaPage />} />
                <Route path="top-productos" element={<TopProductosPage />} />
                <Route path="clientes-nuevos-vs-recurrentes" element={<ClientesNuevosVsRecurrentesPage />} />
                <Route path="clientes-top-ltv" element={<ClientesTopLTVPage />} />
                <Route path="clv-ltv" element={<CLV_LTVPage />} />
                <Route path="cohortes-recompra" element={<CohortesRecompraPage />} />
                <Route path="comparativa-vendedores" element={<ComparativaVendedoresPage />} />

            </Route>

            <Route
                path="productividad-vendedor"
                element={<ProductividadVendedor />}
            />

            {/* ===== FALLBACK ===== */}
            <Route path="*" element={<Navigate to="/superadmin/analytics" replace />} />
        </Routes>
    );
};

export default AnalyticsRouter;
