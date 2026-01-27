import { useState } from "react";

/* ================= COMPONENTES ================= */
import Administradores from "./list/Administradores";
import UserBulkUpload from "./bulk/UserBulkUpload";
import UserAudit from "./audit/UserAudit";

import KPIUsuariosResumen from "./kpis/KPIUsuariosResumen";
import UsersQuickActions from "./actions/UsersQuickActions";
import UsersPermissionsPreview from "./roles/UsersPermissionsPreview";
import UsersEmptyState from "./shared/UsersEmptyState";

/* ================= CSS ================= */
import "../../../styles/admin/users/users-module.css";

export default function UsersModule() {

    // 🔹 simulación de usuarios (luego vendrá de API)
    const [users] = useState([
        { id: 1, nombre: "Admin Principal" },
        { id: 2, nombre: "Soporte" }
    ]);

    return (
        <div className="users-module">

            {/* ================= HEADER ================= */}
            <div className="users-header">
                <h2>Gestión de Usuarios</h2>
                <UsersQuickActions />
            </div>

            {/* ================= KPIs ================= */}
            <div className="users-kpis">
                <KPIUsuariosResumen />
            </div>

            {/* ================= LISTADO ================= */}
            <section className="users-section">
                <h3>Usuarios del sistema</h3>

                {users.length === 0 ? (
                    <UsersEmptyState onCreate={() => console.log("Abrir modal crear usuario")} />
                ) : (
                    <Administradores />
                )}
            </section>

            {/* ================= ROLES / PERMISOS ================= */}
            <section className="users-section">
                <h3>Permisos y Roles</h3>
                <UsersPermissionsPreview />
            </section>

            {/* ================= CARGA MASIVA ================= */}
            <section className="users-section">
                <h3>Carga masiva</h3>
                <UserBulkUpload />
            </section>

            {/* ================= AUDITORÍA ================= */}
            <section className="users-section">
                <h3>Auditoría y logs</h3>
                <UserAudit />
            </section>

        </div>
    );
}
