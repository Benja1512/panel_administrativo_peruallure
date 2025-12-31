import { Line } from "react-chartjs-2";

const data = {
    labels: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
    datasets: [
        {
            label: "2024",
            data: [900,1100,1300,1500,1800,2200,2000,2400,2600,3000,3200,3500],
            borderColor: "#00BFFF",
            tension: 0.3
        },
        {
            label: "2025",
            data: [1200,1400,1600,2100,2500,3000,2800,3100,3500,3700,3900,4500],
            borderColor: "#FF4500",
            tension: 0.3
        }
    ],
};
export default () => <Line data={data} />;
