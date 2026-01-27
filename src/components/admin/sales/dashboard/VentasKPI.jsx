import "../../../../styles/admin/sales/VentasKPI.css";

export default function VentasKPI() {
    const kpis = [
        {
            label: "Ventas del mes",
            value: "€ 128,450",
            change: "+12.4%",
            tone: "success"
        },
        {
            label: "Pedidos",
            value: "982",
            change: "+5.1%",
            tone: "neutral"
        },
        {
            label: "Ticket promedio",
            value: "€ 130.80",
            change: "+1.8%",
            tone: "neutral"
        },
        {
            label: "Reembolsos",
            value: "€ 1,240",
            change: "-0.6%",
            tone: "danger"
        }
    ];

    return (
        <div className="ventas-kpi">
            <h3 className="ventas-kpi__title">KPIs de Ventas</h3>

            <div className="ventas-kpi__grid">
                {kpis.map((kpi) => (
                    <div key={kpi.label} className="ventas-kpi__card">
                        <div className="ventas-kpi__label">{kpi.label}</div>

                        <div className="ventas-kpi__value">{kpi.value}</div>

                        <div className={`ventas-kpi__change ${kpi.tone}`}>
                            {kpi.change}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
