import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const labels = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

const data = {
    labels,
    datasets: [
        {
            label: "Facturación (€)",
            data: [1200,1400,1600,2100,2500,3000,2800,3100,3500,3700,3900,4500],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        }
    ],
};

const options = {
    responsive: true,
    plugins: { legend: { position: "top" } }
};

export default function FacturacionMensualBarras() {
    return <Bar data={data} options={options} />;
}
