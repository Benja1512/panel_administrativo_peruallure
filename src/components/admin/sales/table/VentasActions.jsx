import { useState } from "react";
import "../../../../styles/admin/sales/ventas-actions.css";
import { exportPDF } from "../utils/exportVentasPDF";

export default function VentasActions({ venta, onView, onUpdateEstado }) {
    const [open, setOpen] = useState(false);

    const confirm = (msg, cb) => {
        if (window.confirm(msg)) cb();
    };

    return (
        <div className="ventas-actions">
            {/* VER */}
            <button className="btn-view" onClick={() => onView(venta)}>
                Ver
            </button>

            {/* PDF */}
            <button
                className="btn-secondary"
                onClick={() => exportPDF(venta)}
            >
                PDF
            </button>

            {/* DROPDOWN */}
            <div className="actions-dropdown">
                <button
                    className="btn-more"
                    onClick={() => setOpen(o => !o)}
                >
                    ⋮
                </button>

                {open && (
                    <div className="dropdown-menu">
                        {venta.estado === "pendiente" && (
                            <button onClick={() => onUpdateEstado(venta, "pagado")}>
                                Marcar pagado
                            </button>
                        )}

                        {venta.estado === "pagado" && (
                            <>
                                <button onClick={() => onUpdateEstado(venta, "enviado")}>
                                    Marcar enviado
                                </button>

                                <button
                                    onClick={() =>
                                        confirm("¿Seguro que deseas reembolsar?", () =>
                                            onUpdateEstado(venta, "reembolsado")
                                        )
                                    }
                                >
                                    Reembolsar
                                </button>
                            </>
                        )}

                        {venta.estado !== "cancelado" &&
                            venta.estado !== "reembolsado" && (
                                <button
                                    onClick={() =>
                                        confirm("¿Seguro que deseas cancelar el pedido?", () =>
                                            onUpdateEstado(venta, "cancelado")
                                        )
                                    }
                                >
                                    Cancelar
                                </button>
                            )}
                    </div>
                )}
            </div>
        </div>
    );
}
