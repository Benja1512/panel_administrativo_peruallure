// src/components/superadmin/AuditExportButton.jsx
import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './AuditExportButton.css';

const AuditExportButton = ({ logs }) => {
    const handleExportPDF = () => {
        const doc = new jsPDF();
        doc.text("Historial de Auditoría", 14, 10);
        autoTable(doc, {
            head: [['ID', 'Usuario', 'Acción', 'Fecha', 'IP', 'Navegador']],
            body: logs.map(log => [
                log.id,
                log.usuario,
                log.accion,
                new Date(log.fecha).toLocaleString(),
                log.ip,
                log.navegador
            ])
        });
        doc.save('historial_auditoria.pdf');
    };

    const handleExportCSV = () => {
        const csvContent = [
            ["ID", "Usuario", "Acción", "Fecha", "IP", "Navegador"],
            ...logs.map(log => [
                log.id,
                log.usuario,
                log.accion,
                new Date(log.fecha).toLocaleString(),
                log.ip,
                log.navegador
            ])
        ]
            .map(e => e.join(","))
            .join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'historial_auditoria.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className="export-buttons">
            <button className="btn-pdf" onClick={handleExportPDF}>📄 Exportar PDF</button>
            <button className="btn-csv" onClick={handleExportCSV}>📋 Exportar CSV</button>
        </div>
    );
};

export default AuditExportButton;
