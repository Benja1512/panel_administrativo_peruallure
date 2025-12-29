import React from "react";
import AdminSidebar from "./AdminSidebar";
import "../../styles/LayoutPanel.css"; // El mismo que usa SuperAdmin

const AdminLayout = ({ children }) => {
    return (
        <div className="layout-panel">
            <AdminSidebar />
            <main className="layout-content">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
