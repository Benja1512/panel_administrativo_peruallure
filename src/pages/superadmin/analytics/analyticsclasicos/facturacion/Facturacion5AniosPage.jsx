// 📌 src/pages/superadmin/facturacion/FacturacionMensual.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

import "../../../../../styles/facturacion/FacturacionMensual.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

/* 🔢 Datos de los 12 meses */
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

/* 📌 Cálculos automáticos */
const total = datosMensuales.reduce((a, b) => a + b.monto, 0);
const mejorMes = datosMensuales.reduce((max, m) => m.monto > max.monto ? m : max);
const peorMes = datosMensuales.reduce((min, m) => m.monto < min.monto ? m : min);
const ticketPromedio = Math.round(total / 12);

/* 📈 Configuración del gráfico */
const data = {
    labels: datosMensuales.map(d => d.mes),
    datasets: [
        {
            label: "Facturación Mensual (USD)",
            data: datosMensuales.map(d => d.monto),
            borderColor: "#D60000",
            backgroundColor: "rgba(214,0,0,0.15)",
            borderWidth: 3,
            tension: 0.4,
            fill: true,
        },
    ],
};

const options = {
    responsive: true,
    plugins: { legend: { display: false }},
    scales: {
        y: { ticks: { callback: v => "USD " + v.toLocaleString() }}
    }
};

const FacturacionMensual = () => {
    return (
        <div className="facturacion-mensual-container">
            <h1>📅 Facturación Mensual (12 Meses)</h1>
            <p className="subtitulo">
                Reporte histórico mensual del año en curso con análisis y comparativa.
            </p>

            {/* ⭐ KPIs resumen */}
            <div className="kpi-grid">
                <div className="kpi-card">💵 Total Anual<br /><strong>USD {total.toLocaleString()}</strong></div>
                <div className="kpi-card">🏆 Mejor Mes<br /><strong>{mejorMes.mes} → USD {mejorMes.monto.toLocaleString()}</strong></div>
                <div className="kpi-card">⚠️ Peor Mes<br /><strong>{peorMes.mes} → USD {peorMes.monto.toLocaleString()}</strong></div>
                <div className="kpi-card">📊 Ticket Promedio<br /><strong>USD {ticketPromedio.toLocaleString()}</strong></div>
            </div>

            {/* 📉 Gráfico */}
            <div className="chart-box">
                <Line data={data} options={options} />
            </div>

            {/* 📦 Cuadros estilo MRR/diaria */}
            <h3 className="subtitulo-seccion">🗂 Detalle por Mes</h3>
            <div className="facturacion-grid">
                {datosMensuales.map((m, i) => (
                    <div key={i} className={`facturacion-item ${m.mes === mejorMes.mes ? "best" : ""}`}>
                        <span>{m.mes}</span>
                        <span className="separator">|</span>
                        <strong>USD {m.monto.toLocaleString()}</strong>
                    </div>
                ))}
            </div>

            {/* 🚀 Comparativa Año vs Año (5 años) */}
            <h3 className="subtitulo-seccion">🚀 Comparativa Año vs Año (2020 → 2024)</h3>
            <p className="texto-comparativa">
                Evolución anual, crecimiento interanual y variación porcentual del negocio.
            </p>

            <table className="tabla-comparativa-5anios">
                <thead>
                <tr>
                    <th>Año</th>
                    <th>Total</th>
                    <th>Diferencia vs Año Anterior</th>
                    <th>Variación %</th>
                </tr>
                </thead>
                <tbody>
                {[
                    { año: 2020, total: 52300 },
                    { año: 2021, total: 61900 },
                    { año: 2022, total: 75400 },
                    { año: 2023, total: 89700 },
                    { año: 2024, total: 103200 },
                ].map((item, idx, arr) => {
                    const prev = arr[idx - 1];
                    const diferencia = idx === 0 ? "—" : (item.total - prev.total).toLocaleString();
                    const variacion =
                        idx === 0 ? "—" : ((item.total - prev.total) / prev.total * 100).toFixed(1) + "%";

                    return (
                        <tr key={idx} className={item.total < (prev?.total || 0) ? "negativo" : "positivo"}>
                            <td>{item.año}</td>
                            <td>USD {item.total.toLocaleString()}</td>
                            <td>{diferencia === "—" ? "—" : `USD ${diferencia}`}</td>
                            <td>{variacion}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default FacturacionMensual;
