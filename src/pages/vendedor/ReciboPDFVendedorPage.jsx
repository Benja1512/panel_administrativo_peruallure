// src/pages/vendedor/ReciboPDFVendedorPage.jsx
import React from 'react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import '../../styles/ReciboPDFVendedorPage.css';

// Estilos PDF
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    field: {
        marginBottom: 5,
    }
});

const ReciboPDF = ({ venta }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>🧾 Recibo de Venta</Text>
            <Text style={styles.field}>Cliente: {venta.cliente}</Text>
            <Text style={styles.field}>Producto: {venta.producto}</Text>
            <Text style={styles.field}>Monto: ${venta.monto.toFixed(2)}</Text>
            <Text style={styles.field}>Fecha: {venta.fecha}</Text>
        </Page>
    </Document>
);

const ReciboPDFVendedorPage = () => {
    const ventas = [
        { id: 1, cliente: 'Carlos Díaz', producto: 'Camisa Urbana', monto: 49.99, fecha: '2025-05-01' },
        { id: 2, cliente: 'Lucía Torres', producto: 'Chaqueta Andina', monto: 89.5, fecha: '2025-05-03' },
        { id: 3, cliente: 'Mario Paredes', producto: 'Sombrero Cusqueño', monto: 29.0, fecha: '2025-05-05' },
    ];

    return (
        <main style={{ marginLeft: '250px', padding: '2rem' }}>
            <h2>📄 Recibos en PDF</h2>
            <p>Haz clic en “Descargar Recibo” para obtener el PDF individual de cada venta.</p>

            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {ventas.map((venta) => (
                    <li key={venta.id} style={{ marginBottom: '1rem' }}>
                        <strong>{venta.producto}</strong> – ${venta.monto.toFixed(2)}
                        <br />
                        <PDFDownloadLink
                            document={<ReciboPDF venta={venta} />}
                            fileName={`recibo_${venta.id}.pdf`}
                            style={{
                                marginTop: '0.5rem',
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontSize: '0.9rem'
                            }}
                        >
                            {({ loading }) => loading ? 'Generando PDF…' : 'Descargar Recibo'}
                        </PDFDownloadLink>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default ReciboPDFVendedorPage;
