import ProtectedRoute from "./ProtectedRoute";
import GestorPage from "../pages/gestor/GestorPage";

export default function GestorRoutes() {
    return (
        <ProtectedRoute allowedRoles={["gestor"]}>
            <GestorPage />
        </ProtectedRoute>
    );
}
