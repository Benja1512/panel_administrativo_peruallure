import React from "react";
import "../../../../styles/admin/analytics/tables/tables.css";

const data = [
    { producto: "Leche 1L", stock: 3, minimo: 20 },
    { producto: "Arroz 5kg", stock: 6, minimo: 15 },
    { producto: "Aceite", stock: 2, minimo: 10 },
];

const ProductosCriticosTable = () => (
    <div className="table-card">
        <h4>Productos críticos</h4>
        <table>
            <thead>
            <tr>
                <th>Producto</th>
                <th>Stock</th>
                <th>Mínimo</th>
            </tr>
            </thead>
            <tbody>
            {data.map((p, i) => (
                <tr key={i}>
                    <td>{p.producto}</td>
                    <td className="danger">{p.stock}</td>
                    <td>{p.minimo}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default ProductosCriticosTable;
