import "../../../../styles/admin/sales/ventas-por-dia.css";

export default function VentasPorDia() {
    const data = [
        { dia: "Lun", total: 1200 },
        { dia: "Mar", total: 980 },
        { dia: "Mié", total: 1430 },
        { dia: "Jue", total: 1100 },
        { dia: "Vie", total: 1800 },
        { dia: "Sáb", total: 2100 },
        { dia: "Dom", total: 1600 },
    ];

    const max = Math.max(...data.map(d => d.total));

    return (
        <div className="ventas-dia">
            <h4>Ventas por día</h4>

            <div className="ventas-dia__bars">
                {data.map(d => (
                    <div key={d.dia} className="ventas-dia__item">
                        <div
                            className="ventas-dia__bar"
                            style={{ height: `${(d.total / max) * 100}%` }}
                        />
                        <span>{d.dia}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
