import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
    labels: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    datasets: [
        {
            label: "Facturación",
            data: [1200,1400,1600,2100,2500,3000,2800,3100,3500,3700,3900,4500],
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            tension: 0.4,
            fill: false
        }
    ]
};
export default () => <Line data={data} />;
