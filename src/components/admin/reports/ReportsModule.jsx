import { useState } from "react";

import ReportVentas from "./cards/ReportVentas";
import ReportInventario from "./cards/ReportInventario";
import ReportUsuarios from "./cards/ReportUsuarios";
import ReportAuditoria from "./cards/ReportAuditoria";
import ReportsHistory from "./history/ReportsHistory";
import ReportsFilters from "./filters/ReportsFilters";

import "../../../styles/admin/reports/reports-responsive.css";
import "../../../styles/admin/reports/reports.css";

export default function ReportsModule() {

    const [filters, setFilters] = useState({
        type: "ventas",
        from: "",
        to: ""
    });

    return (
        <div className="reports-module">
            <h2>Reportes del sistema</h2>

            {/* 👇 AQUÍ ESTABA EL ERROR */}
            <ReportsFilters filters={filters} setFilters={setFilters} />

            <div className="reports-grid">
                <ReportVentas />
                <ReportInventario />
                <ReportUsuarios />
                <ReportAuditoria />
            </div>

            <ReportsHistory />
        </div>
    );
}
