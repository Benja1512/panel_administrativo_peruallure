import React from "react";
import "../../../../styles/admin/reports/ReportsFilters.css";

const ReportsFilters = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="reports-filters">
            <select name="type" value={filters.type} onChange={handleChange}>
                <option value="ventas">Ventas</option>
                <option value="inventario">Inventario</option>
                <option value="finanzas">Finanzas</option>
                <option value="usuarios">Usuarios</option>
                <option value="auditoria">Auditoría</option>
            </select>

            <input type="date" name="from" value={filters.from} onChange={handleChange} />
            <input type="date" name="to" value={filters.to} onChange={handleChange} />
        </div>
    );
};

export default ReportsFilters;
