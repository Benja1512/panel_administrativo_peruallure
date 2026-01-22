import { Outlet } from "react-router-dom";
import "../../styles/admin/dashboard/dashboard.css";

export default function AdminPage() {
    return (
        <main>
            <Outlet />
        </main>
    );
}

