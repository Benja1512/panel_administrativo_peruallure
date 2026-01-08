import React from "react";
import '../../../styles/AnalyticsPage.css';

// Componentes específicos para VENDEDOR
import KPIs from '../../../components/superadmin/analytics/LogisticsAndSupply/inventario/InventarioKPIs';
import VentasPorCategoria from '../../../components/superadmin/analytics/marketing/VentasPorCategoria';
import ComparativaVendedores from '../../../components/superadmin/analytics/marketing/ComparativaVendedores';
import ProductividadVendedor from '../../../components/superadmin/analytics/ProductividadVendedor';
import ValorPromedioPedido from '../../../components/superadmin/analytics/ValorPromedioPedido';
import TendenciaMensualVentas from '../../../components/superadmin/analytics/TendenciaMensualVentas';
import BotonesExportacion from '../../../components/superadmin/analytics/BotonesExportacion';

const AnalyticsVendedor = () => {
    return (
        <>
            <div id="dashboard-portada" className="analytics-page-container">
                <section className="analytics-section portada-dashboard">
                    <h1>📊 Panel de Rendimiento – Vendedor</h1>
                    <p>📅 Fecha: {new Date().toLocaleDateString()}</p>
                    <p>🧑 Rol: Vendedor</p>
                </section>
            </div>

            <div className="no-export">
                <section className="analytics-section">
                    <h2>📤 Exportaciones</h2>
                    <BotonesExportacion />
                </section>
            </div>

            <div id="dashboard-capturable" className="analytics-page-container">

                <section className="analytics-section">
                    <h2>📈 Indicadores Clave</h2>
                    <KPIs />
                    <VentasPorCategoria />
                </section>

                <section className="analytics-section">
                    <h2>📊 Desempeño de Ventas</h2>
                    <TendenciaMensualVentas />
                    <ComparativaVendedores />
                    <ProductividadVendedor />
                    <ValorPromedioPedido />
                </section>

            </div>
        </>
    );
};

export default AnalyticsVendedor;
