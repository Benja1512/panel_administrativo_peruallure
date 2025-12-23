import { Routes, Route, Navigate } from "react-router-dom";

import DashboardSuperAdminPage from "../pages/superadmin/DashboardSuperAdminPage";
import AnalyticsRouter from "../pages/superadmin/analytics/AnalyticsRouter";
import UsuariosPage from "../pages/superadmin/UsuariosPage";
import RolesPage from "../pages/superadmin/RolesPage";
import PermisosPage from "../pages/superadmin/PermisosPage";
import HistorialAlertasPage from "../pages/superadmin/HistorialAlertasPage";
import ConfiguracionPage from "../pages/superadmin/ConfiguracionPage";
import SoportePage from "../pages/superadmin/SoportePage";

const SuperAdminRoutes = () => {
    return (
        <Routes>
            {/* 🔹 Al entrar a /superadmin redirige al dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* 🔹 Dashboard principal */}
            <Route path="dashboard" element={<DashboardSuperAdminPage />} />

            {/* 🔹 Analytics (router interno) */}
            <Route path="analytics/*" element={<AnalyticsRouter />} />

            {/* 🔹 Gestión */}
            <Route path="usuarios" element={<UsuariosPage />} />
            <Route path="roles" element={<RolesPage />} />
            <Route path="permisos" element={<PermisosPage />} />

            {/* 🔹 Auditoría */}
            <Route path="auditoria" element={<HistorialAlertasPage />} />

            {/* 🔹 Configuración del sistema */}
            <Route path="configuracion" element={<ConfiguracionPage />} />

            {/* 🔹 Soporte */}
            <Route path="soporte" element={<SoportePage />} />

            {/* 🔹 Cualquier ruta desconocida vuelve al dashboard */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    );
};

export default SuperAdminRoutes;
