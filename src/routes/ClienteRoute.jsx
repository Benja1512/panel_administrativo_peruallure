import ProtectedRoute from "./ProtectedRoute";
import ClientePage from "../pages/cliente/ClientePage";

export default function ClienteRoutes() {
    return (
        <ProtectedRoute allowedRoles={["cliente"]}>
            <ClientePage />
        </ProtectedRoute>
    );
}
