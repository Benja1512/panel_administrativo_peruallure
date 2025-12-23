import ProtectedRoute from "./ProtectedRoute";
import VendedorPage from "../pages/vendedor/VendedorPage";

export default function VendedorRoutes() {
    return (
        <ProtectedRoute allowedRoles={["vendedor"]}>
            <VendedorPage />
        </ProtectedRoute>
    );
}
