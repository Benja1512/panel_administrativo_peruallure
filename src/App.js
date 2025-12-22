import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importamos tus aplicaciones reales (Roles)
import SuperAdminApp from './apps/SuperAdminApp';
import AdminApp from './apps/AdminApp';
import VendedorApp from './apps/VendedorApp';
import ClienteApp from './apps/ClienteApp';

// Importamos el Login (para poder entrar)
import LoginPage from './pages/auth/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Si entras a la raíz, te manda al Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* 2. Pantalla de Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* 3. TUS PANELES REALES (Aquí están los logs y usuarios) */}
        <Route path="/superadmin/*" element={<SuperAdminApp />} />
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/vendedor/*" element={<VendedorApp />} />
        <Route path="/cliente/*" element={<ClienteApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
