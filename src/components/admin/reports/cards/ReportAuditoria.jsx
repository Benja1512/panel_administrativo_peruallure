import "../../../../styles/admin/reports/ReportUsuarios.css";

import ExportCSVButton from "../export/ExportCSVButton";
import ExportExcelButton from "../export/ExportExcelButton";
import ExportPDFButton from "../export/ExportPDFButton";

export default function ReportUsuarios() {
    return (
        <div className="report-usuarios">
            <h4>Reporte de usuarios</h4>
            <p>Altas, bajas, actividad</p>

            <div className="row">
                <span>Usuarios activos</span>
                <b>1248</b>
            </div>

            <div className="row">
                <span>Nuevos</span>
                <b>86</b>
            </div>

            <div className="row">
                <span>Inactivos</span>
                <b>112</b>
            </div>

            <div className="actions">
                <ExportCSVButton />
                <ExportExcelButton />
                <ExportPDFButton />
            </div>
        </div>
    );
}
