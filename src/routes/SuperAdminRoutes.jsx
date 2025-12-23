import ProtectedRoute from "./ProtectedRoute";
import SuperAdminPage from "../pages/superadmin/SuperAdminPage";

export default function SuperAdminRoutes() {
    return (
        <ProtectedRoute allowedRoles={["superadmin"]}>
            <SuperAdminPage />
        </ProtectedRoute>
    );
}
