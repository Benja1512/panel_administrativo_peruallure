import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/CanalOrigenClientes.css";

const datos = [
    { canal: "Redes Sociales", clientes: 120 },
    { canal: "Web", clientes: 95 },
    { canal: "Tienda Física", clientes: 75 },
    { canal: "Publicidad", clientes: 60 },
    { canal: "Referidos", clientes: 45 },
];

const CanalOrigenClientes = () => {
    return (
        <SectionLayout
            title="📍 Origen de Clientes"
            description="Identifica desde qué canal provienen los clientes: redes, web, tienda, etc."
        >
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={datos}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="canal" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="clientes" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </SectionLayout>
    );
};

export default CanalOrigenClientes;
