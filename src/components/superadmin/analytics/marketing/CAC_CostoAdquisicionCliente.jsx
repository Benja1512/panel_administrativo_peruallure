import React from "react";
import { DollarSign } from "lucide-react";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/CAC_CostoAdquisicionCliente.css";

const CAC_CostoAdquisicionCliente = () => {
    return (
        <SectionLayout
            title="💰 CAC - Costo de Adquisición de Cliente"
            description="Comparativa entre inversión en marketing y clientes adquiridos."
            icon={<DollarSign size={20} />}
        >
            <div className="cac-container">
                <div className="cac-metric">
                    <span className="label">Inversión Total</span>
                    <span className="value">€12,500</span>
                </div>

                <div className="cac-metric">
                    <span className="label">Clientes Adquiridos</span>
                    <span className="value">320</span>
                </div>

                <div className="cac-metric highlight">
                    <span className="label">CAC Promedio</span>
                    <span className="value">€39.06</span>
                </div>
            </div>
        </SectionLayout>
    );
};

export default CAC_CostoAdquisicionCliente;
