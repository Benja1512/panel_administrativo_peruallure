import "../../../../styles/admin/sales/ventas-search.css";

export default function VentasSearch({ value, onChange }) {
    return (
        <div className="ventas-search">
            <input
                type="text"
                placeholder="Buscar cliente o ID..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
