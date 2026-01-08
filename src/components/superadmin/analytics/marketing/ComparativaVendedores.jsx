import React from "react";
import { Users } from "lucide-react";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/ComparativaVendedores.css";

const ComparativaVendedores = () => {
    return (
        <SectionLayout
            title="🧍‍♂️🧍 Comparativa de Vendedores"
            description="Análisis del rendimiento, productividad y resultados por vendedor."
            icon={<Users size={20} />}
        >
            <div className="comparativa-vendedores">
                <div className="vendedor-card">
                    <span className="nombre">Juan Pérez</span>
                    <span className="metric">Ventas: €45,200</span>
                    <span className="metric">Pedidos: 120</span>
                </div>

                <div className="vendedor-card">
                    <span className="nombre">María López</span>
                    <span className="metric">Ventas: €52,800</span>
                    <span className="metric">Pedidos: 138</span>
                </div>

                <div className="vendedor-card destacado">
                    <span className="nombre">Carlos Gómez</span>
                    <span className="metric">Ventas: €61,300</span>
                    <span className="metric">Pedidos: 155</span>
                </div>
            </div>
        </SectionLayout>
    );
};

export default ComparativaVendedores;
