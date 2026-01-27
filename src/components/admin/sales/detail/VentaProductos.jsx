import "../../../../styles/admin/sales/ventaProductos.css";

export default function VentaProductos({ productos = [] }) {
    return (
        <div className="venta-productos">
            <h4>Productos</h4>

            <table>
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cant.</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
                </thead>

                <tbody>
                {productos.length === 0 ? (
                    <tr>
                        <td colSpan="4" className="empty">
                            No hay productos
                        </td>
                    </tr>
                ) : (
                    productos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.qty}</td>
                            <td>€ {p.price.toFixed(2)}</td>
                            <td>€ {(p.qty * p.price).toFixed(2)}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}
