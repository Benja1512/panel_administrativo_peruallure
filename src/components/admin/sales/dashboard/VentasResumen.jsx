import "../../../../styles/admin/sales/VentasResumen.css";

export default function VentasResumen() {
    const topProductos = [
        { name: "Perfume Andino", units: 320, revenue: 18450 },
        { name: "Crema Facial Premium", units: 265, revenue: 15230 },
        { name: "Kit Spa Home", units: 198, revenue: 12890 },
    ];

    const topClientes = [
        { name: "Maria Lopez", orders: 12, total: 1890 },
        { name: "Carlos Ruiz", orders: 9, total: 1460 },
        { name: "Ana Torres", orders: 8, total: 1210 },
    ];

    return (
        <div className="ventas-resumen">
            <div className="ventas-resumen__head">
                <h3 className="ventas-resumen__title">Resumen</h3>
                <span className="ventas-resumen__tag">Últimos 30 días</span>
            </div>

            <div className="ventas-resumen__grid">
                <div className="ventas-resumen__card">
                    <h4 className="ventas-resumen__subtitle">Top productos</h4>
                    <div className="ventas-resumen__list">
                        {topProductos.map((p) => (
                            <div key={p.name} className="ventas-resumen__row">
                                <span className="ventas-resumen__name">{p.name}</span>
                                <span className="ventas-resumen__meta">{p.units} uds</span>
                                <span className="ventas-resumen__value">€ {p.revenue.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ventas-resumen__card">
                    <h4 className="ventas-resumen__subtitle">Top clientes</h4>
                    <div className="ventas-resumen__list">
                        {topClientes.map((c) => (
                            <div key={c.name} className="ventas-resumen__row">
                                <span className="ventas-resumen__name">{c.name}</span>
                                <span className="ventas-resumen__meta">{c.orders} pedidos</span>
                                <span className="ventas-resumen__value">€ {c.total.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="ventas-resumen__footer">
                <div className="ventas-resumen__note">
                    Nota: Este resumen puede alimentarse desde el backend cuando lo conectes (Nivel 3).
                </div>
            </div>
        </div>
    );
}
