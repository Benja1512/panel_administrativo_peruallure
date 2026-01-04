import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

// ✅ REGISTRAMOS LOS ELEMENTOS QUE NECESITA DOUGHNUT
ChartJS.register(ArcElement, Tooltip, Legend);

// ✅ Datos simulados de productos y totales
const productos = [
    { nombre: "Café", total: 4200 },
    { nombre: "Té", total: 7600 },
    { nombre: "Chocolate", total: 9400 },
    { nombre: "Galletas", total: 12100 }
];

// ✅ Colores para cada segmento
const colores = [
    "#36A2EB",
    "#FF6384",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40"
];

const DonaFacturacion = () => {
    const data = {
        labels: productos.map(p => p.nombre),
        datasets: [
            {
                data: productos.map(p => p.total),
                backgroundColor: colores.slice(0, productos.length),
                borderColor: "#fff",
                borderWidth: 2
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "right"
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.label}: €${tooltipItem.raw.toLocaleString()}`;
                    }
                }
            }
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "0 auto" }}>
            <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Facturación por Producto</h3>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DonaFacturacion;
