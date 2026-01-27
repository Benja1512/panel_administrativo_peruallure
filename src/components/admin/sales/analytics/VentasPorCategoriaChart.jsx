import "../../../../styles/admin/sales/VentasPorCategoriaChart.css";

export default function VentasPorCategoriaChart({ ventas = [] }) {
    const categorias = ventas.reduce((acc, v) => {
        const cat = v.categoria || "Sin categoría";
        acc[cat] = (acc[cat] || 0) + v.total;
        return acc;
    }, {});

    return (
        <div className="card">
            <h4>Ventas por categoría</h4>

            {Object.entries(categorias).map(([cat, total]) => (
                <div key={cat} className="row">
                    <span>{cat}</span>
                    <b>€ {total.toFixed(2)}</b>
                </div>
            ))}
        </div>
    );
}
