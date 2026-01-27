import VentasActions from "./VentasActions";
import "../../../../styles/admin/sales/ventas-row.css";
import "../../../../styles/admin/sales/ventas-estados.css";

export default function VentasRow({ venta, onView, onUpdateEstado }) {
    return (
        <tr className="ventas-row">
            <td className="mono">{venta.id}</td>
            <td>{venta.fecha}</td>
            <td className="strong">{venta.cliente}</td>
            <td>{venta.canal}</td>
            <td className="right">€ {venta.total.toFixed(2)}</td>

            {/* ESTADO VISUAL */}
            <td>
        <span className={`estado-badge ${venta.estado.toLowerCase()}`}>
          {venta.estado}
        </span>
            </td>

            {/* ACCIONES */}
            <td className="center">
                <VentasActions
                    venta={venta}
                    onView={onView}
                    onUpdateEstado={onUpdateEstado}
                />
            </td>
        </tr>
    );
}
