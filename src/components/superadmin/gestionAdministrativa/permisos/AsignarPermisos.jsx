import { useEffect, useMemo, useState } from "react";
import superAdminService from "../../../../services/superAdminService";
import useUnsavedChanges from "../../../../hooks/useUnsavedChanges";

import PermissionTemplates from "./PermissionTemplates";
import PermissionDiff from "./PermissionDiff";
import PermissionAuditLog from "./PermissionAuditLog";
import PermissionCriticalModal from "./PermissionCriticalModal";
import UserOverridePanel from "./UserOverridePanel";
import TenantSelector from "./TenantSelector";

import "../../../../styles/gestionAdministrativa/permisos/AsignarPermisos.css";

/* ======================= MOCK ======================= */
const MOCK_ROLES = [
    { id: "role_admin", name: "Admin" },
    { id: "role_gestor", name: "Gestor" },
    { id: "role_vendedor", name: "Vendedor" },
    { id: "role_cliente", name: "Cliente" },
];

const MOCK_PERMISSIONS = [
    { id: "USER_CREATE", critical: false },
    { id: "USER_EDIT", critical: false },
    { id: "USER_DELETE", critical: true },
    { id: "ROLES_MANAGE", critical: true },
    { id: "PERMISSIONS_MANAGE", critical: true },
    { id: "ORDERS_VIEW", critical: false },
    { id: "ORDERS_EDIT", critical: false },
    { id: "INVENTORY_VIEW", critical: false },
    { id: "INVENTORY_EDIT", critical: true },
    { id: "REPORTS_EXPORT", critical: false },
];

const MOCK_ASSIGN = {
    role_admin: MOCK_PERMISSIONS.map(p => p.id),
    role_gestor: ["ORDERS_VIEW", "ORDERS_EDIT", "INVENTORY_VIEW"],
    role_vendedor: ["ORDERS_VIEW", "INVENTORY_VIEW"],
    role_cliente: ["ORDERS_VIEW"],
};
/* =================================================== */

const sortArray = (arr) => [...arr].sort();

const AsignarPermisos = () => {
    const [tenantId, setTenantId] = useState("tenant_demo");

    const [roles] = useState(MOCK_ROLES);
    const [permissions] = useState(MOCK_PERMISSIONS);

    const [selectedRole, setSelectedRole] = useState("");
    const [assigned, setAssigned] = useState([]);
    const [initial, setInitial] = useState([]);

    const [criticalToConfirm, setCriticalToConfirm] = useState(null);
    const [search, setSearch] = useState("");
    const [saving, setSaving] = useState(false);

    /* ================= LOAD ROLE ================= */
    useEffect(() => {
        if (!selectedRole) {
            setAssigned([]);
            setInitial([]);
            return;
        }

        const key = `perm_${tenantId}_${selectedRole}`;
        const data =
            JSON.parse(localStorage.getItem(key)) ||
            MOCK_ASSIGN[selectedRole] ||
            [];

        setAssigned(data);
        setInitial(data);
    }, [selectedRole, tenantId]);
    /* ============================================= */

    /* ================= UNSAVED ================= */
    const hasChanges =
        JSON.stringify(sortArray(assigned)) !==
        JSON.stringify(sortArray(initial));

    useUnsavedChanges(hasChanges);
    /* =========================================== */

    /* ================= FILTER ================= */
    const filtered = useMemo(() => {
        const q = search.toLowerCase();
        return permissions.filter(p =>
            p.id.toLowerCase().includes(q)
        );
    }, [permissions, search]);
    /* =========================================== */

    /* ================= TOGGLE ================= */
    const toggle = (perm) => {
        if (perm.critical && !assigned.includes(perm.id)) {
            setCriticalToConfirm(perm);
            return;
        }

        setAssigned(prev =>
            prev.includes(perm.id)
                ? prev.filter(x => x !== perm.id)
                : [...prev, perm.id]
        );
    };
    /* =========================================== */

    /* ================= SAVE ================= */
    const handleSave = async () => {
        if (!selectedRole) return;
        setSaving(true);

        localStorage.setItem(
            `perm_${tenantId}_${selectedRole}`,
            JSON.stringify(assigned)
        );

        const auditKey = `audit_${tenantId}`;
        const audit = JSON.parse(localStorage.getItem(auditKey) || "{}");

        audit[selectedRole] ??= [];
        audit[selectedRole].push({
            id: Date.now(),
            date: new Date().toLocaleString(),
            actor: "SuperAdmin",
            action: `Actualizó permisos (${assigned.length})`,
        });

        localStorage.setItem(auditKey, JSON.stringify(audit));

        setInitial(assigned);
        setSaving(false);
    };
    /* =========================================== */

    return (
        <div className="asignar-permisos-page">

            {/* 🌍 MULTI TENANT */}
            <TenantSelector value={tenantId} onChange={setTenantId} />

            <h2>🗂️ Asignar Permisos a Roles</h2>

            {/* 👥 ROL */}
            <div className="ap-card">
                <label>Rol</label>
                <select
                    value={selectedRole}
                    onChange={e => setSelectedRole(e.target.value)}
                >
                    <option value="">Seleccione un rol</option>
                    {roles.map(r => (
                        <option key={r.id} value={r.id}>{r.name}</option>
                    ))}
                </select>
            </div>

            {/* 📦 PLANTILLAS */}
            {selectedRole && (
                <PermissionTemplates onApply={setAssigned} />
            )}

            {/* 👤 OVERRIDE */}
            {selectedRole && (
                <UserOverridePanel roleId={selectedRole} />
            )}

            {/* 🔎 BUSCAR */}
            {selectedRole && (
                <input
                    className="ap-search"
                    placeholder="Buscar permiso..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            )}

            {/* 🔐 PERMISOS */}
            <div className="ap-grid">
                {filtered.map(p => (
                    <label key={p.id} className="ap-perm">
                        <input
                            type="checkbox"
                            checked={assigned.includes(p.id)}
                            onChange={() => toggle(p)}
                        />
                        {p.id}
                        {p.critical && <span className="ap-critical">CRÍTICO</span>}
                    </label>
                ))}
            </div>

            {/* 🧠 DIFERENCIAS */}
            {hasChanges && (
                <PermissionDiff before={initial} after={assigned} />
            )}

            {/* 💾 GUARDAR */}
            <button
                disabled={!hasChanges || saving}
                onClick={handleSave}
                className="ap-btn ap-btn--primary"
            >
                {saving ? "Guardando..." : "Guardar cambios"}
            </button>

            {/* 📝 AUDITORÍA */}
            {selectedRole && (
                <PermissionAuditLog
                    tenantId={tenantId}
                    roleId={selectedRole}
                />
            )}

            {/* ⚠️ MODAL CRÍTICO */}
            {criticalToConfirm && (
                <PermissionCriticalModal
                    permission={criticalToConfirm}
                    onConfirm={() => {
                        setAssigned(prev => [...prev, criticalToConfirm.id]);
                        setCriticalToConfirm(null);
                    }}
                    onCancel={() => setCriticalToConfirm(null)}
                />
            )}
        </div>
    );
};

export default AsignarPermisos;
