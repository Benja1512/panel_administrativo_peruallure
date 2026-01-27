import jsPDF from "jspdf";

export function exportPDF(venta) {
    const pdf = new jsPDF();

    pdf.setFontSize(14);
    pdf.text(`Pedido: ${venta.id}`, 10, 15);
    pdf.text(`Cliente: ${venta.cliente}`, 10, 25);
    pdf.text(`Canal: ${venta.canal}`, 10, 35);
    pdf.text(`Estado: ${venta.estado}`, 10, 45);
    pdf.text(`Total: €${venta.total.toFixed(2)}`, 10, 55);

    pdf.save(`pedido-${venta.id}.pdf`);
}
