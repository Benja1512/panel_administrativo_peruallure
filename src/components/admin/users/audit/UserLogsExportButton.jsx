import "../../../../styles/admin/UserLogsExportButton.css";

export default function UserLogsExportButton({ logs = [] }) {
    const exportarCSV = () => {
        if (!logs.length) {
            alert("No hay logs para exportar");
            return;
        }

        const headers = ["Usuario", "Acción", "Módulo", "Fecha", "IP"];
        const rows = logs.map(l =>
            [l.usuario, l.accion, l.modulo, l.fecha, l.ip].join(",")
        );

        const csv = [headers.join(","), ...rows].join("\n");

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "user_logs.csv");
        link.click();
    };

    return (
        <button className="logs-export-btn" onClick={exportarCSV}>
            Exportar Logs
        </button>
    );
}
