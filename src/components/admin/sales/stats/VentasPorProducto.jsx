import "../../../../styles/admin/sales/ventas-por-producto.css";

export default function VentasPorProducto() {
    const productos = [
        { name: "Perfume Andino", total: 18450 },
        { name: "Crema Facial Premium", total: 15230 },
        { name: "Kit Spa Home", total: 12890 },
    ];

    return (
        <div className="ventas-producto">
            <h4>Top productos</h4>

            {productos.map(p => (
                <div key={p.name} className="ventas-producto__row">
                    <span>{p.name}</span>
                    <b>€ {p.total.toLocaleString()}</b>
                </div>
            ))}
        </div>
    );
}
