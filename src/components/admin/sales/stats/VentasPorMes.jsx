import "../../../../styles/admin/sales/ventas-por-mes.css";

export default function VentasPorMes() {
    const meses = [
        { mes: "Ene", total: 128450 },
        { mes: "Feb", total: 110300 },
        { mes: "Mar", total: 132900 },
        { mes: "Abr", total: 125200 },
    ];

    return (
        <div className="ventas-mes">
            <h4>Ventas por mes</h4>

            <ul>
                {meses.map(m => (
                    <li key={m.mes}>
                        <span>{m.mes}</span>
                        <b>€ {m.total.toLocaleString()}</b>
                    </li>
                ))}
            </ul>
        </div>
    );
}
