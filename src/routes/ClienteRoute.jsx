// 📁 src/routes/ClienteRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const DashboardCliente = () => <h1>Dashboard Cliente</h1>;
const Compras = () => <h1>Mis Compras</h1>;
const Pagos = () => <h1>Pagos y métodos</h1>;
const MiCuenta = () => <h1>Mi Cuenta</h1>;
const Soporte = () => <h1>Soporte</h1>;

export default function ClienteRoutes() {
    return (
        <Routes>
            <Route index element={<DashboardCliente />} />
            <Route path="compras" element={<Compras />} />
            <Route path="pagos" element={<Pagos />} />
            <Route path="micuenta" element={<MiCuenta />} />
            <Route path="soporte" element={<Soporte />} />

            {/* Rutas no válidas → Dashboard */}
            <Route path="*" element={<Navigate to="/cliente" replace />} />
        </Routes>
    );
}
