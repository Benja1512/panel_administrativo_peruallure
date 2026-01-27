import React from "react";
import "../../../../styles/admin/sales/cohortesClientes.css";

const cohorts = [
    { mes: "Enero", d30: 42, d60: 31, d90: 18 },
    { mes: "Febrero", d30: 48, d60: 35, d90: 22 },
    { mes: "Marzo", d30: 51, d60: 39, d90: 27 },
];

export default function CohortesClientes() {
    return (
        <div className="card">
            <h3 className="title">👥 Cohortes de clientes</h3>

            <table className="table">
                <thead>
                <tr>
                    <th>Mes</th>
                    <th>30d</th>
                    <th>60d</th>
                    <th>90d</th>
                </tr>
                </thead>
                <tbody>
                {cohorts.map((c) => (
                    <tr key={c.mes}>
                        <td>{c.mes}</td>
                        <td>{c.d30}%</td>
                        <td>{c.d60}%</td>
                        <td>{c.d90}%</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
