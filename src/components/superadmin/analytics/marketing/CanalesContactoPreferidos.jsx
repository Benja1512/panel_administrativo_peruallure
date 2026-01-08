import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";
import SectionLayout from "../../../shared/SectionLayout";
import "../../../../styles/marketing/CanalesContactoPreferidos.css";

const data = [
    { canal: "WhatsApp", valor: 45 },
    { canal: "Email", valor: 25 },
    { canal: "Teléfono", valor: 15 },
    { canal: "Chat en vivo", valor: 10 },
    { canal: "Redes sociales", valor: 5 },
];

const colores = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA46BE"];

const CanalesContactoPreferidos = () => {
    return (
        <SectionLayout
            title="☎️ Canales Preferidos de Contacto"
            description="Analiza por dónde prefieren comunicarse los clientes (WhatsApp, email, etc.)"
        >
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="valor"
                        nameKey="canal"
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </SectionLayout>
    );
};

export default CanalesContactoPreferidos;
