export function exportExcelCSV(rows, filename = "ventas.xlsx.csv") {
    // CSV compatible con Excel
    const header = ["id","fecha","cliente","canal","estado","total"];
    const lines = [
        header.join(";"),
        ...rows.map(r => [r.id, r.fecha, r.cliente, r.canal, r.estado, r.total].join(";"))
    ];

    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
