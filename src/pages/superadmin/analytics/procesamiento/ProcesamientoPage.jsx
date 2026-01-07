import React from "react";
import TiempoProcesamiento from "../../../../components/superadmin/analytics/LogisticsAndSupply/procesamiento/TiempoProcesamiento";


const ProcesamientoPage = () => {
    return (
        <div className="analytics-page">
            {/* Título de página */}
            <h1>Tiempo de Procesamiento</h1>
            <p>Indicadores sobre la duración de los procesos logísticos.</p>

            {/* Sección */}
            <TiempoProcesamiento />
        </div>
    );
};

export default ProcesamientoPage;
