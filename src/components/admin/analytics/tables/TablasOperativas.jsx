import React from "react";
import UltimosPedidosTable from "./UltimosPedidosTable";
import ProductosCriticosTable from "./ProductosCriticosTable";
import UsuariosRecientesTable from "./UsuariosRecientesTable";
import LogsOperativosTable from "./LogsOperativosTable";

const TablasOperativas = () => (
    <div className="tables-grid">
        <UltimosPedidosTable />
        <ProductosCriticosTable />
        <UsuariosRecientesTable />
        <LogsOperativosTable />
    </div>
);

export default TablasOperativas;
