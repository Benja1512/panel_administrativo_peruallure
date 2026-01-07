import React from "react";
import { Boxes, RefreshCcw, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LogisticaPage = () => {
    const navigate = useNavigate();

    return (
        <div className="analytics-page">
            <h1>Logística & Supply Chain</h1>
            <p>
                Visión general del desempeño logístico, inventarios y tiempos
                operativos.
            </p>

            {/* Accesos rápidos */}
            <div className="kpi-grid">
                <div
                    className="kpi clickable"
                    onClick={() =>
                        navigate("/superadmin/analytics/logistica/inventario")
                    }
                >
                    <Boxes size={18} />
                    <span>Inventario</span>
                </div>

                <div
                    className="kpi clickable"
                    onClick={() =>
                        navigate("/superadmin/analytics/logistica/stock")
                    }
                >
                    <RefreshCcw size={18} />
                    <span>Rotación de Stock</span>
                </div>

                <div
                    className="kpi clickable"
                    onClick={() =>
                        navigate("/superadmin/analytics/logistica/procesamiento")
                    }
                >
                    <Clock size={18} />
                    <span>Tiempo de Procesamiento</span>
                </div>
            </div>
        </div>
    );
};

export default LogisticaPage;
