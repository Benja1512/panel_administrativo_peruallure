// src/components/shared/AlertaGlobalProductosCriticos.jsx
import React from "react";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../styles/AlertaGlobalProductosCriticos.css"; // Asegúrate de crear este archivo de estilo

const AlertaGlobalProductosCriticos = () => {
    const navigate = useNavigate();

    // 🟡 Simulación de número de productos críticos
    const productosCriticos = [
        { id: 1, nombre: "Producto A", stock: 5, minimo: 15 },
        { id: 2, nombre: "Producto C", stock: 3, minimo: 10 },
    ];

    const totalCriticos = productosCriticos.length;

    if (totalCriticos === 0) return null; // ❌ No mostrar nada si no hay alertas

    return (
        <div className="alerta-global">
            <AlertTriangle size={20} className="icono-alerta" />
            <div className="contenido-alerta">
                <strong>{totalCriticos} productos críticos:</strong> necesitan reposición urgente.
                <button
                    className="btn-alerta"
                    onClick={() =>
                        navigate("/superadmin/analytics/logistica/stock/productos-criticos")
                    }
                >
                    Ver detalles
                </button>
            </div>
        </div>
    );
};

export default AlertaGlobalProductosCriticos;
