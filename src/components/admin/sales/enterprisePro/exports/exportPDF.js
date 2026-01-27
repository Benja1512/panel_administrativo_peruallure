import jsPDF from "jspdf";
import "jspdf-autotable";

export function exportVentasPDF(rows, filename = "ventas.pdf") {
    const doc = new jsPDF();
    doc.text("Reporte de Ventas", 14, 12);

    const body = rows.map(r => [r.id, r.fecha, r.cliente, r.canal, r.estado, String(r.total)]);
    doc.autoTable({
        head: [["ID","Fecha","Cliente","Canal","Estado","Total"]],
        body,
        startY: 18
    });

    doc.save(filename);
}
