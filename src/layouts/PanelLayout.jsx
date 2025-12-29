import React from "react";
import "../styles/LayoutPanel.css"; // Usa el mismo diseño que superadmin

const PanelLayout = ({ sidebar, children }) => {
    return (
        <div className="layout-panel">
            {sidebar}
            <main className="layout-content">
                {children}
            </main>
        </div>
    );
};

export default PanelLayout;
