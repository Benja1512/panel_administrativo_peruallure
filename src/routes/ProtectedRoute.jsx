import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (!auth?.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(auth.role)) {
        return <Navigate to="/forbidden" />;
    }

    return children;
};

export default ProtectedRoute;
