import "../../../../styles/admin/sales/ventas-filters.css";

export default function VentasFilters({ filters, setFilters }) {
    return (
        <div className="ventas-filters">
            <input
                type="date"
                value={filters.from}
                onChange={e => setFilters(f => ({ ...f, from: e.target.value }))}
            />

            <input
                type="date"
                value={filters.to}
                onChange={e => setFilters(f => ({ ...f, to: e.target.value }))}
            />

            <select
                value={filters.estado}
                onChange={e => setFilters(f => ({ ...f, estado: e.target.value }))}
            >
                <option value="">Estado</option>
                <option>Pagado</option>
                <option>Pendiente</option>
                <option>Cancelado</option>
            </select>

            <select
                value={filters.canal}
                onChange={e => setFilters(f => ({ ...f, canal: e.target.value }))}
            >
                <option value="">Canal</option>
                <option>Web</option>
                <option>Tienda</option>
                <option>WhatsApp</option>
                <option>Marketplace</option>
            </select>

            <input
                placeholder="Cliente"
                value={filters.cliente}
                onChange={e => setFilters(f => ({ ...f, cliente: e.target.value }))}
            />
        </div>
    );
}
