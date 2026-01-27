import "../../../../styles/admin/sales/ventaPago.css";

export default function VentaPago({ pago }) {
    if (!pago) return null;

    return (
        <div className="venta-pago">
            <h4>Pago</h4>

            <div className="venta-pago__row">
                <span>Subtotal</span>
                <b>€ {pago.subtotal.toFixed(2)}</b>
            </div>

            <div className="venta-pago__row">
                <span>Impuestos</span>
                <b>€ {pago.impuestos.toFixed(2)}</b>
            </div>

            <div className="venta-pago__row total">
                <span>Total</span>
                <b>€ {pago.total.toFixed(2)}</b>
            </div>

            <div className="venta-pago__method">
                Método de pago: <b>{pago.metodo}</b>
            </div>
        </div>
    );
}
