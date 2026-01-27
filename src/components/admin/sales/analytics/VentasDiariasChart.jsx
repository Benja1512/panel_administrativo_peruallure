import "../../../../styles/admin/sales/VentasDiariasChart.css";

export default function VentasDiariasChart({ ventas = [] }) {
    const dias = ventas.reduce((acc, v) => {
        acc[v.fecha] = (acc[v.fecha] || 0) + v.total;
        return acc;
    }, {});

    const lista = Object.entries(dias)
        .sort((a, b) => a[0].localeCompare(b[0])) // orden cronológico
        .slice(-30);

    return (
        <div className="card">
            <h4>Evolución diaria (30 días)</h4>

            {lista.length === 0 ? (
                <p className="empty">Sin datos</p>
            ) : (
                <ul className="daily-list">
                    {lista.map(([d, total]) => (
                        <li key={d}>
                            <span>{d}</span>
                            <b>€ {total.toFixed(2)}</b>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
