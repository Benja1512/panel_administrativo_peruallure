import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from "chart.js";

import "../../../../../styles/facturacion/Facturacion5Anios.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

/* 📆 Datos por año */
const datos = [
    { año: "2019", valor: 45800 },
    { año: "2020", valor: 52300 },
    { año: "2021", valor: 61900 },
    { año: "2022", valor: 75400 },
    { año: "2023", valor: 89700 },
    { año: "2024", valor: 103200 },
];

/* 📌 Cálculos */
const total = datos.reduce((acc, i) => acc + i.valor, 0);
const mejor = datos.reduce((max, i) => (i.valor > max.valor ? i : max), datos[0]);

/* 📊 Config del gráfico */
const data = {
    labels: datos.map((i) => i.año),
    datasets: [
        {
            label: "Evolución (€)",
            data: datos.map((i) => i.valor),
            borderColor: "#D60000",
            backgroundColor: "rgba(214, 0, 0, 0.15)",
            borderWidth: 3,
            tension: 0.3,
            fill: true,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
        y: {
            ticks: {
                callback: (v) => "€" + Number(v).toLocaleString("es-ES"),
            },
        },
    },
};

const Facturacion5Anios = () => {
    return (
        <div className="facturacion5-card">
            <h2>📅 Facturación Últimos 5 Años</h2>
            <p>Resumen histórico de crecimiento empresarial.</p>

            <div className="f5-resumen-banda">
                📋 <strong>Total (5 años):</strong> €{total.toLocaleString("es-ES")}
            </div>

            <div className="f5-resumen-banda mejor">
                🏆 <strong>Mejor Año:</strong> {mejor.año} → €{mejor.valor.toLocaleString("es-ES")}
            </div>

            {/* 📌 Cuadros estilo Facturación Diaria */}
            <div className="f5-grid">
                {datos.map((item, index) => {
                    const esMejor = item.año === mejor.año;
                    return (
                        <div key={index} className={`f5-item-cuadro ${esMejor ? "best" : ""}`}>
                            <span className="f5-anio">{item.año}</span>
                            <span className="f5-separador"> | </span>
                            <strong className="f5-monto">€{item.valor.toLocaleString("es-ES")}</strong>
                        </div>
                    );
                })}
            </div>

            {/* 📈 Gráfico */}
            <div className="f5-chart-container">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default Facturacion5Anios;
