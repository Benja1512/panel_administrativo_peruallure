import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../../styles/ReportesPage.css'; // 👈 Importa el CSS

const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    datasets: [
        {
            label: 'Ventas',
            data: [5000, 7000, 6000, 8000],
            backgroundColor: 'rgba(75,192,192,0.6)',
        },
    ],
};

const ReportesPage = () => (
    <main className="reportes-container">
        <h2 className="reportes-title">📈 Reportes</h2>
        <div className="reportes-chart">
            <Bar data={data} />
        </div>
    </main>
);

export default ReportesPage;
