import React from "react";
import "../../../styles/SoporteTecnico.css";

const TicketFilters = () => {
    return (
        <div className="ticket-filters">
            <h3>🔍 Filtros</h3>
            <select>
                <option>Todos</option>
                <option>Abierto</option>
                <option>En Proceso</option>
                <option>Cerrado</option>
            </select>
        </div>
    );
};

export default TicketFilters;
