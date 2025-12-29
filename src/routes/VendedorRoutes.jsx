import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import VendedorExternoApp from "../apps/VendedorExternoApp";

const Ventas = () => <h2>📌 Ventas externas registradas</h2>;
const Clientes = () => <h2>👥 Clientes asignados</h2>;
const Zonas = () => <h2>🗺️ Zonas y rutas asignadas</h2>;
const Reportes = () => <h2>📊 Reportes de campo</h2>;

export default function VendedorExternoRoutes() {
    return (
        <Routes>
            <Route path="/" element={<VendedorExternoApp />}>
                <Route index element={<Ventas />} />
                <Route path="clientes" element={<Clientes />} />
                <Route path="zonas" element={<Zonas />} />
                <Route path="reportes" element={<Reportes />} />
                <Route path="*" element={<Navigate to="/externo" replace />} />
            </Route>
        </Routes>
    );
}
