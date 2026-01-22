import { Routes, Route, Navigate } from "react-router-dom";

// PAGES (wrappers)
import DashboardAdminPage from "../pages/admin/DashboardAdminPage";
import AdministradoresPage from "../pages/admin/AdministradoresPage";
import ReportesAdminPage from "../pages/admin/ReportesAdminPage";
import VentasAdminPage from "../pages/admin/VentasAdminPage";
import InventarioAdminPage from "../pages/admin/InventarioAdminPage";
import SettingsAdminPage from "../pages/admin/SettingsAdminPage";

import AnalyticsAdminPage from "../pages/admin/analytics/AnalyticsAdminPage";

export default function AdminRoutes() {
    return (
        <Routes>
            {/* /admin → dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* menú admin */}
            <Route path="dashboard" element={<DashboardAdminPage />} />
            <Route path="analytics" element={<AnalyticsAdminPage />} />
            <Route path="usuarios" element={<AdministradoresPage />} />
            <Route path="reportes" element={<ReportesAdminPage />} />
            <Route path="ventas" element={<VentasAdminPage />} />
            <Route path="inventario" element={<InventarioAdminPage />} />
            <Route path="configuracion" element={<SettingsAdminPage />} />

            {/* fallback */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Routes>
    );
}
