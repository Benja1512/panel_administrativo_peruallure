import React from "react";
import "../../../../../styles/facturacion/FacturacionMensual.css";

/* 🔢 Datos de los 12 meses */
const datosMensuales = [
    { mes: "Enero", monto: 18250 },
    { mes: "Febrero", monto: 21040 },
    { mes: "Marzo", monto: 22410 },
    { mes: "Abril", monto: 19870 },
    { mes: "Mayo", monto: 25500 },
    { mes: "Junio", monto: 27380 },
    { mes: "Julio", monto: 28100 },
    { mes: "Agosto", monto: 29250 },
    { mes: "Septiembre", monto: 30500 },
    { mes: "Octubre", monto: 31820 },
    { mes: "Noviembre", monto: 32650 },
    { mes: "Diciembre", monto: 33890 },
];

/* 📌 Total anual */
const total = datosMensuales.reduce((acc, item) => acc + item.monto, 0);

/* 🏆 Mejor mes */
const mejorMes = datosMensuales.reduce(
    (max, mes) => (mes.monto > max.monto ? mes : max),
    datosMensuales[0]
);

const FacturacionMensual = () => {
    return (
        <div className="facturacion-diaria-card">
            <h2>💰 Facturación Mensual (12 Meses)</h2>
            <p>Resumen consolidado del año completo.</p>

            <div className="facturacion-resumen">
                <div className="facturacion-item left">
                    <span>📋 Total Anual:</span>
                    <strong>USD {total.toLocaleString()}</strong>
                </div>

                <div className="facturacion-item right mejor-mes">
                    <span>🏆 Mejor Mes:</span>
                    <strong>{mejorMes.mes} → USD {mejorMes.monto.toLocaleString()}</strong>
                </div>
            </div>

            <div className="grid-dias">
                {datosMensuales.map((m, i) => (
                    <div key={i} className="grid-item">
                        {m.mes} <strong>USD {m.monto.toLocaleString()}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacturacionMensual;
