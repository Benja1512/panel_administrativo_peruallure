import React from "react";
import KPIVentas from "./KPIVentas";
import KPIPedidos from "./KPIPedidos";
import KPIStock from "./KPIStock";
import KPIUsuarios from "./KPIUsuarios";
import KPITickets from "./KPITickets";

const KPIsOperativos = () => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem"
        }}>
            <KPIVentas />
            <KPIPedidos />
            <KPIStock />
            <KPIUsuarios />
            <KPITickets />
        </div>
    );
};

export default KPIsOperativos;
