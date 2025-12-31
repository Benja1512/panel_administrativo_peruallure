import React, { useState } from "react";
import "../../../../../styles/facturacion/FacturacionMensual.css"

const datosMensuales = [
    { mes: "Enero", monto: 18250 },
    { mes: "Febrero", monto: 21040 },
    { mes: "Marzo", monto: 22410 },
    { mes: "Abril", monto: 19870 },
    { mes: "Mayo", monto: 25500 },
    { mes: "Junio", monto: 27380 },
    { mes: "Julio", monto: 26850 },
    { mes: "Agosto", monto: 28100 },
    { mes: "Septiembre", monto: 29220 },
    { mes: "Octubre", monto: 30510 },
    { mes: "Noviembre", monto: 31180 },
    { mes: "Diciembre", monto: 32750 },
];

const estilos = ["estilo-card", "estilo-linea", "estilo-premium"];

const FacturacionMensual = () => {
    const [estilo, setEstilo] = useState("estilo-card");

    return (
        <div className="facturacion-bloque">
            <h2>📅 Facturación Mensual (12 Meses)</h2>
            <p>Reporte histórico mensual del año en curso.</p>

            {/* 🔄 Selector de estilo */}
            <div className="selector-estilos">
                {estilos.map(s => (
                    <button
                        key={s}
                        onClick={() => setEstilo(s)}
                        className={estilo === s ? "btn-active" : ""}
                    >
                        {s}
                    </button>
                ))}
            </div>

            {/* 🧾 Tabla con el estilo dinámico */}
            <div className={`tabla-mensual ${estilo}`}>
                {datosMensuales.map((d,i) => (
                    <div key={i} className="fila-mes">
                        <span>{d.mes}</span>
                        <strong>USD {d.monto.toLocaleString()}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacturacionMensual;
