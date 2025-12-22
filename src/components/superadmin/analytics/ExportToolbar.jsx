import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../../../styles/export-toolbar.css";

const ExportToolbar = () => {
    const [selected, setSelected] = useState([]);
    const [loadingPDF, setLoadingPDF] = useState(false);

    // Todas las secciones disponibles
    const sections = [
        { id: "resumen", label: "📈 Resumen General" },
        { id: "clasicos", label: "📊 Indicadores Clásicos" },
        { id: "prediccion", label: "🧠 Predicción & IA" },
        { id: "logistica", label: "🚚 Logística & Supply Chain" },
        { id: "marketing", label: "📣 Marketing & Campañas" },
        { id: "cliente", label: "😊 Experiencia del Cliente" },
        { id: "avanzado", label: "📈 Análisis Avanzado" },
        { id: "eventos", label: "📋 Eventos" },
    ];

    const toggleSection = (id) => {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((s) => s !== id)
                : [...prev, id]
        );
    };

    const exportPDF = async () => {
        if (selected.length === 0)
            return alert("⚠ Selecciona al menos una sección para exportar.");

        setLoadingPDF(true);

        const pdf = new jsPDF("p", "mm", "a4");
        let firstPage = true;

        for (const secId of selected) {
            const element = document.getElementById(secId);
            if (!element) continue;

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#fff",
            });

            const imgData = canvas.toDataURL("image/png");
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            if (!firstPage) pdf.addPage();
            else firstPage = false;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        }

        pdf.save("dashboard_seleccionado.pdf");
        setLoadingPDF(false);
    };

    const printSelected = () => {
        if (selected.length === 0)
            return alert("⚠ Selecciona al menos una sección para imprimir.");

        const allSections = document.querySelectorAll(".analytics-section");
        allSections.forEach((sec) => (sec.style.display = "none"));

        selected.forEach((id) => {
            const sec = document.getElementById(id);
            if (sec) sec.style.display = "block";
        });

        window.print();

        // restaurar todo después de imprimir
        allSections.forEach((sec) => (sec.style.display = "block"));
    };

    return (
        <>
            <div className="export-toolbar">
                <h3>📤 Exportar / Imprimir Secciones</h3>

                <div className="export-checkboxes">
                    {sections.map((s) => (
                        <label key={s.id}>
                            <input
                                type="checkbox"
                                checked={selected.includes(s.id)}
                                onChange={() => toggleSection(s.id)}
                            />
                            {s.label}
                        </label>
                    ))}
                </div>

                <div className="export-buttons-row">
                    <button onClick={exportPDF}>📄 Exportar PDF</button>
                    <button onClick={printSelected}>🖨️ Imprimir</button>
                </div>
            </div>

            {loadingPDF && (
                <div className="pdf-loading-overlay">
                    <div className="pdf-loading-box">
                        ⏳ Generando PDF… por favor espera
                    </div>
                </div>
            )}
        </>
    );
};

export default ExportToolbar;
