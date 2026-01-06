import { Routes, Route, Navigate } from "react-router-dom";

/* 📌 Dashboard & Base */
import DashboardSuperAdminPage from "../pages/superadmin/DashboardSuperAdminPage";

/* 📌 Analytics */
import AnalyticsRouter from "../pages/superadmin/analytics/AnalyticsRouter";

/* 📌 Gestión de Usuarios y Control */
import UsuariosPage from "../pages/superadmin/UsuariosPage";
import RolesPage from "../pages/superadmin/RolesPage";
import PermisosPage from "../pages/superadmin/PermisosPage";
import AsignarPermisosPage from "../pages/superadmin/AsignarPermisosPage";

/* 📌 Seguridad & Auditoría */
import HistorialAlertasPage from "../pages/superadmin/HistorialAlertasPage";
import DetalleComparativaPage from "../pages/superadmin/DetalleComparativaPage";

/* 📌 Configuración del Sistema */
import ConfiguracionPage from "../pages/superadmin/ConfiguracionPage";

/* 📌 Soporte */
import SoportePage from "../pages/superadmin/SoportePage";

/* 📌 Ventas Globales */
import VentasDiariasPage from "../pages/superadmin/VentasDiariasPage";
import VentasMensualesPage from "../pages/superadmin/VentasMensualesPage";
import VentasSemanalesPage from "../pages/superadmin/VentasSemanalesPage";

/* 📌 FACTURACIÓN (AGREGADO) */
import FacturacionPage from "../pages/superadmin/analytics/analyticsclasicos/facturacion/FacturacionPage";
import FacturacionDiaria from "../pages/superadmin/analytics/analyticsclasicos/facturacion/FacturacionDiaria";
import FacturacionMensualPage from "../pages/superadmin/analytics/analyticsclasicos/facturacion/FacturacionMensualPage";
import FacturacionAnualPage from "../pages/superadmin/analytics/analyticsclasicos/facturacion/FacturacionAnualPage";

import Facturacion5AniosPage from "../pages/superadmin/analytics/analyticsclasicos/facturacion/Facturacion5AniosPage";

/* 📌 Supply and Chain */
import InventarioPage from "../pages/superadmin/analytics/LogisticsAndSupply/InventarioPage";
import ProcesamientoPage from "../pages/superadmin/analytics/LogisticsAndSupply/ProcesamientoPage";
import RotacionStockPage from "../pages/superadmin/analytics/LogisticsAndSupply/RotacionStockPage";



const SuperAdminRoutes = () => {
    return (
        <Routes>

            {/* 🚀 Ingreso base → Dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* 🏠 Dashboard principal */}
            <Route path="dashboard" element={<DashboardSuperAdminPage />} />

            {/* 📊 Analytics Global */}
            <Route path="analytics/*" element={<AnalyticsRouter />} />

            {/* LOGÍSTICA */}
            <Route path="logistica">
                <Route path="inventario" element={<InventarioPage />} />
                <Route path="procesamiento" element={<ProcesamientoPage />} />
                <Route path="rotacion" element={<RotacionStockPage />} />
            </Route>

            {/* 👥 Gestión */}
            <Route path="usuarios" element={<UsuariosPage />} />
            <Route path="roles" element={<RolesPage />} />
            <Route path="permisos" element={<PermisosPage />} />
            <Route path="asignar-permisos" element={<AsignarPermisosPage />} />

            {/* 🔐 Auditoría y seguridad */}
            <Route path="auditoria" element={<HistorialAlertasPage />} />
            <Route path="auditoria/detalle/:id" element={<DetalleComparativaPage />} />

            {/* 🧩 Ventas */}
            <Route path="ventas/diarias" element={<VentasDiariasPage />} />
            <Route path="ventas/mensuales" element={<VentasMensualesPage />} />
            <Route path="ventas/semanales" element={<VentasSemanalesPage />} />

            {/* 💸 FACTURACIÓN - (AGREGADO) */}
            <Route path="facturacion" element={<FacturacionPage />} />
            <Route path="facturacion/diaria" element={<FacturacionDiaria />} />
            <Route path="facturacion/mensual" element={<FacturacionMensualPage />} />
            <Route path="facturacion/anual" element={<FacturacionAnualPage />} />
            <Route path="facturacion/5anios" element={<Facturacion5AniosPage />} />

            {/* 🛠 Configuración */}
            <Route path="configuracion" element={<ConfiguracionPage />} />

            {/* 📞 Soporte */}
            <Route path="soporte" element={<SoportePage />} />

            {/* ❓ Default fallback */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />



        </Routes>
    );
};

export default SuperAdminRoutes;
