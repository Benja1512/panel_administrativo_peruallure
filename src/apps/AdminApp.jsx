import React from "react";
import AdminLayout from "../components/admin/AdminLayout";
import AdminRoutes from "../routes/AdminRoutes";

const AdminApp = () => {
    return (
        <AdminLayout>
            <AdminRoutes />
        </AdminLayout>
    );
};

export default AdminApp;
