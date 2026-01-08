import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AlertaGlobalPopup.css"; // Asegúrate de tener este CSS

const AlertaGlobalPopup = () => {
    const [mostrar, setMostrar] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const yaMostrado = localStorage.getItem("popupCriticosMostrado");
        if (!yaMostrado) {
            setMostrar(true);
        }
    }, []);

    const cerrarPopup = () => {
        setMostrar(false);
        localStorage.setItem("popupCriticosMostrado", "true");
    };

    const irAProductosCriticos = () => {
        cerrarPopup();
        navigate("/superadmin/analytics/logistica/stock/productos-criticos");
    };

    if (!mostrar) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-alerta">
                <h3>⚠️ Productos Críticos</h3>
                <p>6 productos están por debajo del stock mínimo.</p>
                <div className="popup-botones">
                    <button className="btn-ver" onClick={irAProductosCriticos}>
                        Ver detalles
                    </button>
                    <button className="btn-cerrar" onClick={cerrarPopup}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlertaGlobalPopup;
