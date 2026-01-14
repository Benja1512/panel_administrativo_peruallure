import React from "react"
import "../../../../styles/theme.css";
import "../../../../styles/marketing/marketing-base.css";

/* === COMPONENTES DE MARKETING === */
import CalendarioCampanias from "../../../../components/superadmin/analytics/marketing/CalendarioCampanias";
import ROIcampanias from "../../../../components/superadmin/analytics/marketing/ROIcampanias";
import CAC_CostoAdquisicionCliente from "../../../../components/superadmin/analytics/marketing/CAC_CostoAdquisicionCliente";
import CanalesContactoPreferidos from "../../../../components/superadmin/analytics/marketing/CanalesContactoPreferidos";
import CanalOrigenClientes from "../../../../components/superadmin/analytics/marketing/CanalOrigenClientes";
import EmbudoConversion from "../../../../components/superadmin/analytics/marketing/EmbudoConversion";
import FrecuenciaCompraPromedio from "../../../../components/superadmin/analytics/marketing/FrecuenciaCompraPromedio";
import RentabilidadPorCanal from "../../../../components/superadmin/analytics/marketing/RentabilidadPorCanal";
import SegmentosClientes from "../../../../components/superadmin/analytics/marketing/SegmentosClientes";
import SatisfaccionCliente from "../../../../components/superadmin/analytics/marketing/SatisfaccionCliente";
import TasaRecompra from "../../../../components/superadmin/analytics/marketing/TasaRecompra";
import VentasPorCategoria from "../../../../components/superadmin/analytics/marketing/VentasPorCategoria";
import SentimientoResenas from "../../../../components/superadmin/analytics/marketing/SentimientoResenas";
import ComparativaVendedores from "../../../../components/superadmin/analytics/marketing/ComparativaVendedores";
import ClientesTopLTV from "../../../../components/superadmin/analytics/marketing/ClientesTopLTV";
import CLV_LTV from "../../../../components/superadmin/analytics/marketing/CLV_LTV";
import CohortesRecompra from "../../../../components/superadmin/analytics/marketing/CohortesRecompra";

const MarketingPage = () => {
    return (
        <div className="analytics-page">
            {/* ===== HEADER ===== */}
            <header style={{ marginBottom: "24px" }}>
                <h1>📣 Marketing & Campañas</h1>
                <p style={{ color: "#666", marginTop: "4px" }}>
                    Análisis completo del desempeño comercial, clientes y campañas.
                </p>
            </header>

            {/* ===== CONTENIDO ===== */}
            <div className="analytics-grid">
                <CalendarioCampanias />
                <ROIcampanias />
                <CAC_CostoAdquisicionCliente />

                <CanalesContactoPreferidos />
                <CanalOrigenClientes />
                <EmbudoConversion />
                <FrecuenciaCompraPromedio />
                <TasaRecompra />

                <RentabilidadPorCanal />
                <VentasPorCategoria />
                <ComparativaVendedores />

                <SegmentosClientes />
                <ClientesTopLTV />
                <CLV_LTV />
                <CohortesRecompra />

                <SatisfaccionCliente />
                <SentimientoResenas />
            </div>
        </div>
    );
};

export default MarketingPage;
