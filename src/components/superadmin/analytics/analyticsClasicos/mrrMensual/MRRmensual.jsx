import React from "react";
import "../../../../../styles/MRRmensual.css";

/* 🔢 Datos MRR (12 meses) */
const datosMRR = [
    { mes: "Enero", monto: 4200 },
    { mes: "Febrero", monto: 4300 },
    { mes: "Marzo", monto: 4650 },
    { mes: "Abril", monto: 4780 },
    { mes: "Mayo", monto: 5000 },
    { mes: "Junio", monto: 5320 },
    { mes: "Julio", monto: 5480 },
    { mes: "Agosto", monto: 5600 },
    { mes: "Septiembre", monto: 5750 },
    { mes: "Octubre", monto: 5900 },
    { mes: "Noviembre", monto: 6050 },
    { mes: "Diciembre", monto: 6220 },
];

/* 📌 Totales */
const totalMRR = datosMRR.reduce((acc, item) => acc + item.monto, 0);
const mejorMes = datosMRR.reduce(
    (max, item) => (item.monto > max.monto ? item : max),
    datosMRR[0]
);

const MRRmensual = () => {
    return (
        <div className="mrr-card">
            <h2>📦 MRR Mensual (Ingreso Recurrente)</h2>

            {/* 📍 SUBTÍTULO CONCEPTUAL AGREGADO */}
            <p className="mrr-subtitulo">
                Ingresos mensuales estables y predecibles provenientes de suscripciones, membresías o contratos continuos.
                <br />No incluye ventas únicas ni ingresos extraordinarios.
            </p>

            <div className="mrr-resumen total">
                📋 <strong>Total anual:</strong> USD {totalMRR.toLocaleString()}
            </div>

            <div className="mrr-resumen mejor">
                🏆 <strong>Mejor mes:</strong> {mejorMes.mes} → USD {mejorMes.monto.toLocaleString()}
            </div>

            <div className="mrr-grid">
                {datosMRR.map((item, index) => {
                    const esMejor = item.mes === mejorMes.mes;
                    return (
                        <div key={index} className={`mrr-item ${esMejor ? "best" : ""}`}>
                            <span className="mrr-mes">{item.mes}</span>
                            <span className="mrr-separador"> | </span>
                            <strong className="mrr-valor">USD {item.monto.toLocaleString()}</strong>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MRRmensual;
