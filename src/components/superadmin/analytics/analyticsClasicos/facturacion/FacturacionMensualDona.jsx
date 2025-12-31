import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ["Q1","Q2","Q3","Q4"],
    datasets: [
        {
            data: [4200,7600,9400,12100],
            backgroundColor:[
                "#36A2EB","#FF6384","#FFCE56","#4BC0C0"
            ]
        }
    ]
};

export default () => <Doughnut data={data} />;
