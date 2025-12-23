import ProtectedRoute from "./ProtectedRoute";
import AdminPage from "../pages/admin/AdminPage";

export default function AdminRoutes() {
    return (
        <ProtectedRoute allowedRoles={["admin"]}>
            <AdminPage />
        </ProtectedRoute>
    );
}
