import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 🔐 Login
import LoginPage from "./pages/auth/LoginPage";

// 🎯 Apps reales por rol
import SuperAdminApp from "./apps/SuperAdminApp";
import AdminApp from "./apps/AdminApp";
import GestorApp from "./apps/GestorApp";
import VendedorApp from "./apps/VendedorApp";
import VendedorExternoApp from "./apps/VendedorExternoApp";
import ClienteApp from "./apps/ClienteApp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 1️⃣ Raíz → Login */}
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* 2️⃣ Login */}
                <Route path="/login" element={<LoginPage />} />

                {/* 3️⃣ PANELES POR ROL (SIN AUTENTICACIÓN) */}
                <Route path="/superadmin/*" element={<SuperAdminApp />} />
                <Route path="/admin/*" element={<AdminApp />} />
                <Route path="/gestor/*" element={<GestorApp />} />
                <Route path="/vendedor/*" element={<VendedorApp />} />
                <Route path="/externo/*" element={<VendedorExternoApp />} />
                <Route path="/cliente/*" element={<ClienteApp />} />

                {/* 4️⃣ Ruta no encontrada */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
