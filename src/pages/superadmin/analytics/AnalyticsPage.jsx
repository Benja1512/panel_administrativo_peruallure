import React from 'react';
import '../../../styles/AnalyticsPage.css';
import ExportToolbar from '../../../components/superadmin/analytics/ExportToolbar';

// 📌 Indicadores Clásicos
import KPIs from '../../../components/superadmin/analytics/LogisticsAndSupply/inventario/InventarioKPIs';
import FacturacionMensual from '../../../components/superadmin/analytics/analyticsClasicos/facturacion/FacturacionMensual';
import MRRmensual from '../../../components/superadmin/analytics/analyticsClasicos/mrrMensual/MRRmensual';
import TopProductos from '../../../components/superadmin/analytics/analyticsClasicos/topProductos/TopProductos';
import ClientesTopLTV from '../../../components/superadmin/analytics/ClientesTopLTV';

// 📌 Predicción & IA
import PrediccionVentas from '../../../components/superadmin/analytics/analyticsIA/PrediccionVentas';
import DesviacionForecast from '../../../components/superadmin/analytics/analyticsIA/DesviacionForecast';
import ForecastStockCritico from '../../../components/superadmin/analytics/ForecastStockCritico';

// 📌 Logística & Supply Chain
import InventarioActual from '../../../components/superadmin/analytics/LogisticsAndSupply/inventario/InventarioActual';
import TiempoPromedioEntrega from '../../../components/superadmin/analytics/TiempoPromedioEntrega';
import TiempoProcesamiento from '../../../components/superadmin/analytics/LogisticsAndSupply/procesamiento/TiempoProcesamiento';
import StockVsDemanda from '../../../components/superadmin/analytics/StockVsDemanda';
import RotacionStock from "../../../components/superadmin/analytics/LogisticsAndSupply/stock/RotacionStock";
import CostoLogisticoUnitario from '../../../components/superadmin/analytics/CostoLogisticoUnitario';
import OrdenesPorEntrega from '../../../components/superadmin/analytics/OrdenesPorEntrega';
import PedidosPendientesEnTransito from '../../../components/superadmin/analytics/PedidosPendientesEnTransito';
import PedidosPorCategoria from '../../../components/superadmin/analytics/PedidosPorCategoria';
import SLACumplimiento from '../../../components/superadmin/analytics/SLACumplimiento';

// 📌 Marketing
import CalendarioCampanias from '../../../components/superadmin/analytics/CalendarioCampanias';
import ROIcampanias from '../../../components/superadmin/analytics/ROIcampanias';
import CAC_CostoAdquisicionCliente from '../../../components/superadmin/analytics/CAC_CostoAdquisicionCliente';
import PanelVariacionMensual from '../../../components/superadmin/analytics/PanelVariacionMensual';

// 📌 Cliente
import SatisfaccionCliente from '../../../components/superadmin/analytics/SatisfaccionCliente';
import SentimientoResenas from '../../../components/superadmin/analytics/SentimientoResenas';
import CanalOrigenClientes from '../../../components/superadmin/analytics/CanalOrigenClientes';
import CanalesContactoPreferidos from '../../../components/superadmin/analytics/CanalesContactoPreferidos';
import ClientesNuevosVsRecurrentes from '../../../components/superadmin/analytics/ClientesNuevosVsRecurrentes';
import TasaRecompra from '../../../components/superadmin/analytics/TasaRecompra';
import ChurnClientes from '../../../components/superadmin/analytics/ChurnClientes';
import SegmentosClientes from '../../../components/superadmin/analytics/SegmentosClientes';

// 📌 Alertas & Eventos
import AlertasAnomalias from '../../../components/superadmin/analytics/AlertasAnomalias';
import HistorialEventos from '../../../components/superadmin/analytics/HistorialEventos';

// 📌 Análisis Avanzado
import EmbudoConversion from '../../../components/superadmin/analytics/EmbudoConversion';
import HorasDiasConMasVentas from '../../../components/superadmin/analytics/HorasDiasConMasVentas';
import ComparativaVendedores from '../../../components/superadmin/analytics/ComparativaVendedores';
import ValorPromedioPedido from '../../../components/superadmin/analytics/ValorPromedioPedido';
import RentabilidadPorCanal from '../../../components/superadmin/analytics/RentabilidadPorCanal';
import FiltrosDinamicos from '../../../components/superadmin/analytics/FiltrosDinamicos';
import CumplimientoObjetivos from '../../../components/superadmin/analytics/CumplimientoObjetivos';
import CicloVentaPromedio from '../../../components/superadmin/analytics/CicloVentaPromedio';
import IngresosYMargenes from '../../../components/superadmin/analytics/IngresosYMargenes';
import IngresosPorRegion from '../../../components/superadmin/analytics/IngresosPorRegion';
import IngresosMargenPorProducto from '../../../components/superadmin/analytics/IngresosMargenPorProducto';
import FrecuenciaCompraPromedio from '../../../components/superadmin/analytics/FrecuenciaCompraPromedio';
import GraficoComparativo from '../../../components/superadmin/analytics/GraficoComparativo';
import DevolucionesCancelaciones from '../../../components/superadmin/analytics/DevolucionesCancelaciones';
import HorasPicoVentas from '../../../components/superadmin/analytics/HorasPicoVentas';
import ProductividadVendedor from '../../../components/superadmin/analytics/ProductividadVendedor';
import IndicadorCumplimiento from '../../../components/superadmin/analytics/IndicadorCumplimiento';
import VentasPorCategoria from '../../../components/superadmin/analytics/VentasPorCategoria';
import TendenciaMensualVentas from '../../../components/superadmin/analytics/TendenciaMensualVentas';
import TendenciasPorProducto from '../../../components/superadmin/analytics/TendenciasPorProducto';

import ResumenGeneral from '../../../components/superadmin/analytics/ResumenGeneral';
import "../../../styles/LogisticsAndSupply/LogisticsAndSupply.css";

const AnalyticsPage = () => {
    return (
        <>
            {/* ⭐ PORTADA */}
            <div id="dashboard-portada" className="analytics-page-container">
                <section className="analytics-section portada-dashboard">
                    <h1>📊 Dashboard de Analisis General</h1>
                    <h3>PeruAllure – Panel de Supervisión</h3>
                    <p>📅 Fecha: {new Date().toLocaleDateString()}</p>
                    <p>🧑‍💼 Usuario: SuperAdmin</p>
                </section>
            </div>

            {/* ⭐ TOOLBAR DE EXPORTACIÓN */}
            <div className="no-export">
                <section className="analytics-section">
                    <ExportToolbar />
                </section>
            </div>

            {/* ⭐ CONTENIDO EXPORTABLE */}
            <div id="dashboard-capturable" className="analytics-page-container">

                <section id="resumen" className="analytics-section">
                    <h2>📈 Resumen General del Desempeño</h2>
                    <ResumenGeneral />
                </section>

                <section id="clasicos" className="analytics-section">
                    <h2>📊 Indicadores Clásicos</h2>
                    <KPIs />
                    <FacturacionMensual />
                    <MRRmensual />
                    <TopProductos />
                    <ClientesTopLTV />
                </section>

                <section id="prediccion" className="analytics-section">
                    <h2>🧠 Predicción & IA</h2>
                    <PrediccionVentas />
                    <DesviacionForecast />
                    <ForecastStockCritico />
                </section>

                <section id="logistica" className="analytics-section">
                    <h2>🚚 Logística & Supply Chain</h2>
                    <InventarioActual />
                    <TiempoPromedioEntrega />
                    <TiempoProcesamiento />
                    <StockVsDemanda />
                    <RotacionStock />
                    <CostoLogisticoUnitario />
                    <OrdenesPorEntrega />
                    <PedidosPendientesEnTransito />
                    <PedidosPorCategoria />
                    <SLACumplimiento />
                </section>


                <section id="marketing" className="analytics-section">
                    <h2>📣 Marketing & Campañas</h2>
                    <CalendarioCampanias />
                    <ROIcampanias />
                    <CAC_CostoAdquisicionCliente />
                    <PanelVariacionMensual />
                </section>

                <section id="cliente" className="analytics-section">
                    <h2>😊 Experiencia del Cliente</h2>
                    <SatisfaccionCliente />
                    <SentimientoResenas />
                    <CanalOrigenClientes />
                    <CanalesContactoPreferidos />
                    <ClientesNuevosVsRecurrentes />
                    <TasaRecompra />
                    <ChurnClientes />
                    <SegmentosClientes />
                </section>

                <section id="avanzado" className="analytics-section">
                    <h2>📈 Análisis Avanzado</h2>
                    <EmbudoConversion />
                    <HorasDiasConMasVentas />
                    <ComparativaVendedores />
                    <ValorPromedioPedido />
                    <RentabilidadPorCanal />
                    <FiltrosDinamicos />
                    <CumplimientoObjetivos />
                    <CicloVentaPromedio />
                    <IngresosYMargenes />
                    <IngresosPorRegion />
                    <IngresosMargenPorProducto />
                    <FrecuenciaCompraPromedio />
                    <GraficoComparativo />
                    <DevolucionesCancelaciones />
                    <HorasPicoVentas />
                    <ProductividadVendedor />
                    <IndicadorCumplimiento />
                    <VentasPorCategoria />
                    <TendenciaMensualVentas />
                    <TendenciasPorProducto />
                </section>

                <section id="eventos" className="analytics-section">
                    <h2>📋 Eventos</h2>
                    <AlertasAnomalias />
                    <HistorialEventos />
                </section>

            </div>
        </>
    );
};

export default AnalyticsPage;
