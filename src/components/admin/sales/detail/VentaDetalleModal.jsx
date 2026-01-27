import VentaInfo from "./VentaInfo";
import VentaProductos from "./VentaProductos";
import VentaPago from "./VentaPago";
import "../../../../styles/admin/sales/ventaDetalleModal.css";

export default function VentaDetalleModal({ venta, onClose }) {
    if (!venta) return null; // 👈 IMPORTANTE

    return (
        <div className="venta-modal-backdrop">
            <div className="venta-modal">
                <div className="venta-modal__header">
                    <h3>Detalle de venta {venta.id}</h3>
                    <button onClick={onClose}>✕</button>
                </div>

                <div className="venta-modal__content">
                    <VentaInfo venta={venta} />
                    <VentaProductos productos={venta.productos} />
                    <VentaPago pago={venta.pago} />
                </div>
            </div>
        </div>
    );
}
