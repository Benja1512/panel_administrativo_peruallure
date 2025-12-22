import React from 'react';
import BarChartComponent from '../../components/charts/BarChartComponent';
import LineChartComponent from '../../components/charts/LineChartComponent';
import PieChartComponent from '../../components/charts/PieChartComponent';
import '../../styles/ReportesPage.css';

const ReportesPage = () => {
    const dataInventario = [
        { name: 'Ropa', productos: 120 },
        { name: 'Accesorios', productos: 80 },
        { name: 'Zapatos', productos: 60 },
    ];

    const dataPedidos = [
        { name: 'Semana 1', pedidos: 25 },
        { name: 'Semana 2', pedidos: 38 },
        { name: 'Semana 3', pedidos: 31 },
        { name: 'Semana 4', pedidos: 44 },
    ];

    const dataClientes = [
        { name: 'Activos', value: 75 },
        { name: 'Inactivos', value: 25 },
    ];

    return (
        <div className="reportes-page">
            <h2>📊 Reportes del Gestor</h2>
            <div className="chart-section">
                <BarChartComponent data={dataInventario} dataKey="productos" title="Inventario por Categoría" />
                <LineChartComponent data={dataPedidos} dataKey="pedidos" title="Pedidos Semanales" />
                <PieChartComponent data={dataClientes} dataKey="value" nameKey="name" title="Estado de Clientes" />
            </div>
        </div>
    );
};

export default ReportesPage;
