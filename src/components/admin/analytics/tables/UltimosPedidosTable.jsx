import React from "react";
import "../../../../styles/admin/analytics/tables/tables.css";

const data = [
    { id: "#1023", cliente: "Juan Pérez", total: "€120", estado: "Completado" },
    { id: "#1024", cliente: "María López", total: "€75", estado: "Pendiente" },
    { id: "#1025", cliente: "Carlos Ruiz", total: "€220", estado: "Completado" },
];

const UltimosPedidosTable = () => (
    <div className="table-card">
        <h4>Últimos pedidos</h4>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Estado</th>
            </tr>
            </thead>
            <tbody>
            {data.map((p, i) => (
                <tr key={i}>
                    <td>{p.id}</td>
                    <td>{p.cliente}</td>
                    <td>{p.total}</td>
                    <td className={p.estado === "Pendiente" ? "warn" : "ok"}>
                        {p.estado}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default UltimosPedidosTable;
