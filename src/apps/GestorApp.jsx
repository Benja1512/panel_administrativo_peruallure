import React from "react";
import SidebarGestor from "../components/gestor/SidebarGestor";
import "../styles/LayoutPanel.css"; //

const GestorApp = () => {
    return (
        <div className="layout-panel">
            <SidebarGestor />  {/* 📌 Menu igual al de Admin / SuperAdmin */}

            <main className="layout-content">
                <h1 className="panel-title">Panel Gestor</h1>
                <p className="panel-subtitle">
                    Supervisión operativa y control de procesos.
                </p>

                <div className="panel-card">
                    <p>
                        Gestiona pedidos, operaciones diarias y reportes de rendimiento.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default GestorApp;
