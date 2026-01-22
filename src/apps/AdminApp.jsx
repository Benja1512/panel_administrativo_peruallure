import AdminSidebar from "../components/admin/layout/AdminSidebar";
import AdminRoutes from "../routes/AdminRoutes";
import "../styles/LayoutPanel.css";
import "../styles/admin/dashboard/dashboard.css";

export default function AdminApp() {
    return (
        <div className="layout-panel">
            <AdminSidebar />
            <main className="layout-content">
                <AdminRoutes />
            </main>
        </div>
    );
}
