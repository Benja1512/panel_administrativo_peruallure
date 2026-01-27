import "../../../../styles/admin/sales/ventaInfo.css";

export default function VentaInfo() {
    const info = {
        id: "V-2026-00123",
        cliente: "María López",
        fecha: "2026-01-22",
        estado: "Pagado",
        canal: "Online"
    };

    return (
        <div className="venta-info">
            <h4>Información general</h4>

            <div className="venta-info__grid">
                <div><span>ID</span><b>{info.id}</b></div>
                <div><span>Cliente</span><b>{info.cliente}</b></div>
                <div><span>Fecha</span><b>{info.fecha}</b></div>
                <div><span>Estado</span><b className="success">{info.estado}</b></div>
                <div><span>Canal</span><b>{info.canal}</b></div>
            </div>
        </div>
    );
}
