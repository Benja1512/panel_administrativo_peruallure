import { useState } from "react";

export default function AuditExportButton() {
    const [loading, setLoading] = useState(false);

    return (
        <button onClick={() => setLoading(true)}>
            {loading ? "Exportando..." : "Exportar"}
        </button>
    );
}
