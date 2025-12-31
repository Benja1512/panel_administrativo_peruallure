import React, { useState } from "react";
import "../../../../../styles/facturacion/FacturacionPage.css";

import FacturacionMensualBarras from "../../../../../components/superadmin/analytics/analyticsClasicos/facturacion/FacturacionMensualBarras";
import FacturacionMensualLinea from "../../../../../components/superadmin/analytics/analyticsClasicos/facturacion/FacturacionMensualLinea";
import FacturacionMensualDona from "../../../../../components/superadmin/analytics/analyticsClasicos/facturacion/FacturacionMensualDona";
import FacturacionMensualComparativa from "../../../../../components/superadmin/analytics/analyticsClasicos/facturacion/FacturacionMensualComparativa";
import Facturacion5Anios from "../../../../../components/superadmin/analytics/analyticsClasicos/facturacion/Facturacion5Anios";

const FacturacionPage = () => {
    const [tab, setTab] = useState("mensual");

    const renderGrafico = () => {
        switch (tab) {
            case "mensual": return <FacturacionMensualBarras />;
            case "linea": return <FacturacionMensualLinea />;
            case "dona": return <FacturacionMensualDona />;
            case "comparativa": return <FacturacionMensualComparativa />;
            case "5anios": return <Facturacion5Anios />;
            default: return null;
        }
    };

    return (
        <div className="facturacion-layout">
            <h1>📑 Panel de Facturación</h1>
            <p className="subtitulo">Reportes, análisis e historial financiero</p>

            <div className="tabs-container">
                <button className={tab === "mensual" ? "tab active" : "tab"} onClick={() => setTab("mensual")}>📊 Mensual</button>
                <button className={tab === "linea" ? "tab active" : "tab"} onClick={() => setTab("linea")}>📈 Línea</button>
                <button className={tab === "dona" ? "tab active" : "tab"} onClick={() => setTab("dona")}>🍩 Dona</button>
                <button className={tab === "comparativa" ? "tab active" : "tab"} onClick={() => setTab("comparativa")}>📉 Comparativa</button>
                <button className={tab === "5anios" ? "tab active" : "tab"} onClick={() => setTab("5anios")}>📆 5 Años</button>
            </div>

            <div className="chart-wrapper">
                {renderGrafico()}
            </div>
        </div>
    );
};

export default FacturacionPage;
