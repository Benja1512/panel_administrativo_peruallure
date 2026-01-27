import { useMemo } from "react";
import ventasMock from "../utils/ventasMock";

export default function useVentas(filters) {
    const ventas = ventasMock; // luego aquí va API o storage

    const filtered = useMemo(() => {
        if (!filters) return ventas;

        return ventas.filter((v) => {
            const search = filters.search?.toLowerCase() || "";

            const matchSearch =
                !search ||
                v.cliente.toLowerCase().includes(search) ||
                v.id.toLowerCase().includes(search);

            const matchStatus =
                !filters.status || v.estado === filters.status;

            const matchFrom =
                !filters.from || new Date(v.fecha) >= new Date(filters.from);

            const matchTo =
                !filters.to || new Date(v.fecha) <= new Date(filters.to);

            return matchSearch && matchStatus && matchFrom && matchTo;
        });
    }, [filters, ventas]);

    return filtered;
}
