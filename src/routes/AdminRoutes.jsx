import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "../pages/admin/AdminPage";

export default function AdminRoutes() {
    return (
        <Routes>

            {/* /admin → redirige al dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* /admin/dashboard */}
            <Route path="dashboard" element={<AdminPage />} />

            {/* evitar rutas vacías o errores */}
            <Route path="*" element={<Navigate to="dashboard" replace />} />

        </Routes>
    );
}
