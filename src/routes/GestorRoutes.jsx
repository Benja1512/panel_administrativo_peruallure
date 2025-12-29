import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import GestorLayout from "../layout/GestorLayout";

// 📄 Páginas internas del gestor
import DashboardGestor from "../pages/gestor/DashboardGestor";
import VentasGestor from "../pages/gestor/VentasGestor";
import ReportesGestor from "../pages/gestor/ReportesGestor";

export default function GestorRoutes() {
    return (
        <ProtectedRoute allowedRoles={["gestor"]}>
            <Routes>
                <Route path="/gestor" element={<GestorLayout />}>
                    <Route index element={<DashboardGestor />} /> {/* /gestor */}
                    <Route path="ventas" element={<VentasGestor />} /> {/* /gestor/ventas */}
                    <Route path="reportes" element={<ReportesGestor />} /> {/* /gestor/reportes */}
                </Route>
            </Routes>
        </ProtectedRoute>
    );
}
