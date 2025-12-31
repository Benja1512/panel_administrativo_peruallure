import React from "react";
import "../../../../../styles/facturacion/FacturacionDiaria.css";

const datosDiarios = [
    { dia: 1, monto: 320 },   { dia: 2, monto: 410 },   { dia: 3, monto: 380 },
    { dia: 4, monto: 450 },   { dia: 5, monto: 520 },   { dia: 6, monto: 470 },
    { dia: 7, monto: 610 },   { dia: 8, monto: 590 },   { dia: 9, monto: 650 },
    { dia: 10, monto: 720 },  { dia: 11, monto: 685 },  { dia: 12, monto: 740 },
    { dia: 13, monto: 810 },  { dia: 14, monto: 780 },  { dia: 15, monto: 850 },
    { dia: 16, monto: 910 },  { dia: 17, monto: 890 },  { dia: 18, monto: 940 },
    { dia: 19, monto: 1020 }, { dia: 20, monto: 1110 }, { dia: 21, monto: 960 },
    { dia: 22, monto: 880 },  { dia: 23, monto: 840 },  { dia: 24, monto: 970 },
    { dia: 25, monto: 1050 }, { dia: 26, monto: 1120 }, { dia: 27, monto: 1090 },
    { dia: 28, monto: 1180 }, { dia: 29, monto: 1210 }, { dia: 30, monto: 1300 },
];

const FacturacionDiaria = () => {
    const totalMes = datosDiarios.reduce((acc, d) => acc + d.monto, 0);
    const mejorDia = datosDiarios.reduce((max, d) => d.monto > max.monto ? d : max);

    return (
        <div className="facturacion-bloque">
            <h2>📅 Facturación Diaria</h2>
            <p>Seguimiento de ventas por día del mes en curso.</p>

            <div className="resumen-diario">
                <span>🧾 Total del Mes:</span>
                <strong>USD {totalMes.toLocaleString()}</strong>
            </div>
            <div className="resumen-diario">
                <span>📈 Mejor Día:</span>
                <strong>Día {mejorDia.dia} → USD {mejorDia.monto.toLocaleString()}</strong>
            </div>

            <div className="tabla-diaria">
                {datosDiarios.map((d) => (
                    <div key={d.dia} className="fila-dia">
                        <span>Día {d.dia}</span>
                        <strong>USD {d.monto.toLocaleString()}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacturacionDiaria;
