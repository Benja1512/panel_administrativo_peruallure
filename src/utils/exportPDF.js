// 📌 util para exportaciones de Facturación Mensual
import jsPDF from "jspdf";
import "jspdf-autotable";

// =======================
// 📄 EXPORTAR A PDF
// =======================
export const exportFacturacionPDF = (datos) => {
    const doc = new jsPDF();
    doc.text("Reporte de Facturación Mensual - PeruAllure", 14, 14);

    const rows = datos.map(item => [item.mes, `$ ${item.monto.toLocaleString()}`]);

    doc.autoTable({
        head: [["Mes", "Monto (USD)"]],
        body: rows,
        startY: 20,
    });

    doc.save("Facturacion_Mensual.pdf");
};


// =======================
// 📊 EXPORTAR A EXCEL (CSV)
// =======================
export const exportFacturacionExcel = (datos) => {
    const csv = [
        ["Mes, Monto (USD)"],
        ...datos.map(item => `${item.mes}, ${item.monto}`)
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Facturacion_Mensual.csv";
    a.click();
};
