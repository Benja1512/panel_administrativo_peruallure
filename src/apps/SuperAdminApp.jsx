import React from "react";
import SuperAdminSidebar from "../components/superadmin/layout/SuperAdminSidebar";
import SuperAdminRoutes from "../routes/SuperAdminRoutes";
import "../styles/LayoutPanel.css"; // ✅ ESTE SÍ EXISTE

const SuperAdminApp = () => {
    return (
        <div className="layout-panel">
            <SuperAdminSidebar />
            <main className="layout-content">
                <SuperAdminRoutes />
            </main>
        </div>
    );
};

export default SuperAdminApp;
