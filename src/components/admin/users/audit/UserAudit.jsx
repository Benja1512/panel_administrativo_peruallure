import { useState } from "react";
import AuditFilters from "../../audit/AuditFilters";
import AuditTable from "../../audit/AuditTable";
import AuditExportButton from "../../audit/AuditExportButton";
import AuditGraph from "../../audit/AuditGraph";
import "../../../../styles/admin/UserAudit.css";

export default function UserAudit() {
    const [filters, setFilters] = useState({});

    return (
        <div className="user-audit">
            <h2>Auditoría de Usuarios</h2>

            {/* Filtros */}
            <AuditFilters onFilter={setFilters} />

            {/* Acciones */}
            <div className="audit-actions">
                <AuditExportButton />
            </div>

            {/* Tabla */}
            <AuditTable filters={filters} />

            {/* Gráfico */}
            <div className="audit-graph">
                <AuditGraph />
            </div>
        </div>
    );
}
