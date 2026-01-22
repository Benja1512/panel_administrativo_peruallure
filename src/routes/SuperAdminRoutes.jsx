import { Routes, Route, Navigate } from "react-router-dom";
import PanelLayout from "../layouts/PanelLayout";

// Routers internos
import AnalyticsRouter from "../pages/superadmin/analytics/AnalyticsRouter";
import AdministrationRouter from "../pages/superadmin/administracion/AdministrationRouter";

// Páginas
import DashboardSuperAdminPage from "../pages/superadmin/DashboardSuperAdminPage";
import ConfiguracionPage from "../pages/superadmin/ConfiguracionPage";
import SoporteTecnicoPage from "../pages/superadmin/SoportePage";
import AuditoriaPage from "../pages/superadmin/AuditoriaPage";

const SuperAdminRoutes = () => {
    return (
        <Routes>

            {/* 🔴 EL CAMBIO CLAVE */}
            <Route element={<PanelLayout />}>

                <Route index element={<Navigate to="dashboard" replace />} />

                <Route path="dashboard" element={<DashboardSuperAdminPage />} />
                <Route path="analytics/*" element={<AnalyticsRouter />} />
                <Route path="administracion/*" element={<AdministrationRouter />} />
                <Route path="auditoria" element={<AuditoriaPage />} />
                <Route path="configuracion" element={<ConfiguracionPage />} />
                <Route path="soporte" element={<SoporteTecnicoPage />} />

            </Route>

            <Route path="*" element={<Navigate to="dashboard" replace />} />

        </Routes>
    );
};

export default SuperAdminRoutes;
