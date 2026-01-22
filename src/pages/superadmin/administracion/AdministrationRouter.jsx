import { Routes, Route, Navigate } from "react-router-dom";

import UsuariosPage from "./UsuariosPage";
import RolesGlobalesPage from "./RolesGlobalesPage";
import PermisosPage from "./PermisosPage";
import AsignarPermisosPage from "./AsignarPermisosPage";

const AdministrationRouter = () => {
    return (
        <Routes>
            <Route index element={<Navigate to="usuarios" replace />} />

            <Route path="usuarios" element={<UsuariosPage />} />
            <Route path="roles-globales" element={<RolesGlobalesPage />} />
            <Route path="permisos" element={<PermisosPage />} />
            <Route path="asignar-permisos" element={<AsignarPermisosPage />} />

            <Route path="*" element={<Navigate to="usuarios" replace />} />
        </Routes>
    );
};

export default AdministrationRouter;
