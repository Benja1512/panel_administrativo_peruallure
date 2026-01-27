import "../../../../styles/admin/reports//ReportFinanciero.css";
import ExportCSVButton from "../export/ExportCSVButton";
import ExportExcelButton from "../export/ExportExcelButton";
import ExportPDFButton from "../export/ExportPDFButton";

export default function ReportFinanciero() {
    const data = {
        ingresos: 185420,
        egresos: 142530,
        utilidad: 42890,
        margen: 23.1
    };

    return (
        <div className="report-financiero">
            <h3>💰 Reporte Financiero</h3>

            <div className="row">
                <span>Ingresos</span>
                <b>€ {data.ingresos.toLocaleString()}</b>
            </div>

            <div className="row">
                <span>Egresos</span>
                <b>€ {data.egresos.toLocaleString()}</b>
            </div>

            <div className="row highlight">
                <span>Utilidad Neta</span>
                <b>€ {data.utilidad.toLocaleString()}</b>
            </div>

            <div className="row">
                <span>Margen</span>
                <b>{data.margen}%</b>
            </div>

            <div className="actions">
                <ExportCSVButton />
                <ExportExcelButton />
                <ExportPDFButton />
            </div>
        </div>
    );
}
