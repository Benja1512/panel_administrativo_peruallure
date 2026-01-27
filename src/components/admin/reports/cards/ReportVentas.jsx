import "../../../../styles/admin/reports/ReportVentas.css";
import ExportCSVButton from "../export/ExportCSVButton";
import ExportExcelButton from "../export/ExportExcelButton";
import ExportPDFButton from "../export/ExportPDFButton";

export default function ReportVentas() {
    const ventas = {
        totalMes: 128450,
        pedidos: 982,
        ticketPromedio: 130.8,
        crecimiento: 12.4
    };

    return (
        <div className="report-ventas">
            <h4>📈 Reporte de Ventas</h4>
            <p>Ventas por mes, día y producto</p>

            <div className="row">
                <span>Total del mes</span>
                <b>€ {ventas.totalMes.toLocaleString()}</b>
            </div>

            <div className="row">
                <span>Pedidos</span>
                <b>{ventas.pedidos}</b>
            </div>

            <div className="row">
                <span>Ticket promedio</span>
                <b>€ {ventas.ticketPromedio}</b>
            </div>

            <div className="row success">
                <span>Crecimiento</span>
                <b>+{ventas.crecimiento}%</b>
            </div>

            <div className="actions">
                <ExportCSVButton />
                <ExportExcelButton />
                <ExportPDFButton />
            </div>
        </div>
    );
}
