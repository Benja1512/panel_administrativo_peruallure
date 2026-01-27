import "../../../../styles/admin/reports//ReportInventario.css";
import ExportCSVButton from "../export/ExportCSVButton";
import ExportExcelButton from "../export/ExportExcelButton";
import ExportPDFButton from "../export/ExportPDFButton";

export default function ReportInventario() {
    const inventario = {
        stockTotal: 3245,
        quiebres: 18,
        rotacion: 4.6,
        criticos: 12
    };

    return (
        <div className="report-inventario">
            <h4>📦 Reporte de Inventario</h4>
            <p>Stock, quiebres y rotación</p>

            <div className="row">
                <span>Stock total</span>
                <b>{inventario.stockTotal}</b>
            </div>

            <div className="row danger">
                <span>Productos críticos</span>
                <b>{inventario.criticos}</b>
            </div>

            <div className="row warning">
                <span>Quiebres de stock</span>
                <b>{inventario.quiebres}</b>
            </div>

            <div className="row">
                <span>Rotación promedio</span>
                <b>{inventario.rotacion}x</b>
            </div>

            <div className="actions">
                <ExportCSVButton />
                <ExportExcelButton />
                <ExportPDFButton />
            </div>
        </div>
    );
}
