// src/pages/superadmin/administracion/AdministrationRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";

/* 📁 Páginas administrativas (wrappers) */
import UsuariosPage from "./UsuariosPage";
import RolesGlobalesPage from "./RolesGlobalesPage";
import PermisosPage from "./PermisosPage";
import AsignarPermisosPage from "./AsignarPermisosPage";

/* 📁 Otras páginas de SuperAdmin */
import DashboardSuperAdminPage from "../DashboardSuperAdminPage";
import ConfiguracionPage from "../ConfiguracionPage";
import AuditoriaPage from "../AuditoriaPage";
import SoporteTecnicoPage from "../../../pages/superadmin/SoportePage";

/* 📁 Subrutas de analítica */
import AnalyticsRouter from "../analytics/AnalyticsRouter";

const AdministrationRouter = () => {
    return (
        <Routes>
            {/* 🔷 Página principal */}
            <Route path="/superadmin/dashboard" element={<DashboardSuperAdminPage />} />

            {/* 📊 Analítica y predicción */}
            <Route path="/superadmin/analytics/*" element={<AnalyticsRouter />} />

            {/* 👥 Gestión Administrativa */}
            <Route path="/superadmin/usuarios" element={<UsuariosPage />} />
            <Route path="/superadmin/roles" element={<RolesGlobalesPage />} />
            <Route path="/superadmin/permisos" element={<PermisosPage />} />
            <Route path="/superadmin/asignar-permisos" element={<AsignarPermisosPage />} />

            {/* ⚙️ Sistema y configuración */}
            <Route path="/superadmin/configuracion" element={<ConfiguracionPage />} />
            <Route path="/superadmin/auditoria" element={<AuditoriaPage />} />
            <Route path="/superadmin/soporte" element={<SoporteTecnicoPage />} />

            {/* Redirección por defecto */}
            <Route path="*" element={<Navigate to="/superadmin/dashboard" replace />} />
        </Routes>
    );
};

export default AdministrationRouter;
