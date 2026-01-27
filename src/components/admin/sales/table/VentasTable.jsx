import { useState, useMemo } from "react";
import VentasRow from "./VentasRow";
import "../../../../styles/admin/sales/ventas-table.css";

export default function VentasTable({ data, onView, onUpdateEstado }) {

    /* ======================
       LOADING SKELETON
    ====================== */
    if (!data) {
        return <div className="skeleton-table" />;
    }

    const [page, setPage] = useState(1);
    const perPage = 5;

    const totalPages = Math.ceil(data.length / perPage);

    const paginated = useMemo(() => {
        return data.slice((page - 1) * perPage, page * perPage);
    }, [data, page]);

    return (
        <div className="ventas-table">
            <div className="ventas-table-header">
                <h4>Listado de pedidos</h4>
                <span>{data.length} pedidos</span>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Pedido #</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Canal</th>
                    <th>Total €</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>
                </thead>

                <tbody>
                {paginated.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="empty">
                            No hay pedidos con esos filtros
                        </td>
                    </tr>
                ) : (
                    paginated.map(v => (
                        <VentasRow
                            key={v.id}
                            venta={v}
                            onView={onView}
                            onUpdateEstado={onUpdateEstado}
                        />
                    ))
                )}
                </tbody>
            </table>

            {totalPages > 1 && (
                <div className="ventas-pagination">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(p => p - 1)}
                    >
                        ‹
                    </button>

                    <span>{page} / {totalPages}</span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(p => p + 1)}
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
}
