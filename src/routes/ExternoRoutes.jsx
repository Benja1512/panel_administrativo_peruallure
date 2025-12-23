import ProtectedRoute from "./ProtectedRoute";
import ExternoPage from "../pages/externo/ExternoLayout";
// ⚠️ En tu proyecto el layout actúa como página principal

export default function ExternoRoutes() {
    return (
        <ProtectedRoute allowedRoles={["externo"]}>
            <ExternoPage />
        </ProtectedRoute>
    );
}
