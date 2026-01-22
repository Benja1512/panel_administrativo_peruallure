import React from "react";
import "../../../../styles/gestionAdministrativa/permisos/TenantSelector.css";

const MOCK_TENANTS = [
    { id: "tenant_demo", name: "PeruAllure (Demo)" },
    { id: "tenant_pe", name: "PeruAllure Perú" },
    { id: "tenant_es", name: "PeruAllure España" },
    { id: "tenant_nl", name: "PeruAllure Netherlands" },
];

const TenantSelector = ({ value, onChange }) => {
    return (
        <div className="tenant-card">
            <label className="tenant-label">🌐 Empresa (tenant)</label>

            <select
                className="tenant-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {MOCK_TENANTS.map((t) => (
                    <option key={t.id} value={t.id}>
                        {t.name}
                    </option>
                ))}
            </select>

            <p className="tenant-hint">
                Cada empresa mantiene su propia configuración de roles y permisos.
            </p>
        </div>
    );
};

export default TenantSelector;
