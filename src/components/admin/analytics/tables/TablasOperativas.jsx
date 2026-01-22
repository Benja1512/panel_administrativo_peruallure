import React from "react";
import UltimosPedidosTable from "./UltimosPedidosTable";
import ProductosCriticosTable from "./ProductosCriticosTable";
import UsuariosRecientesTable from "./UsuariosRecientesTable";
import LogsOperativosTable from "./LogsOperativosTable";

const TablasOperativas = () => (
    <div
        style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "1.5rem"
        }}
    >
        <UltimosPedidosTable />
        <ProductosCriticosTable />
        <UsuariosRecientesTable />
        <LogsOperativosTable />
    </div>
);

export default TablasOperativas;
