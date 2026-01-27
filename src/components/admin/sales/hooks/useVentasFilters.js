import { useMemo, useState } from "react";

export default function useVentasFilters(ventas = []) {
    const [filters, setFilters] = useState({
        from: "",
        to: "",
        estado: "",
        canal: "",
        cliente: "",
    });

    const [sort, setSort] = useState("fecha_desc");

    const filtered = useMemo(() => {
        return ventas.filter(v => {
            if (filters.estado && v.estado !== filters.estado) return false;
            if (filters.canal && v.canal !== filters.canal) return false;
            if (filters.cliente && !v.cliente.toLowerCase().includes(filters.cliente.toLowerCase())) return false;

            if (filters.from && new Date(v.fecha) < new Date(filters.from)) return false;
            if (filters.to && new Date(v.fecha) > new Date(filters.to)) return false;

            return true;
        });
    }, [ventas, filters]);

    const sorted = useMemo(() => {
        const arr = [...filtered];
        if (sort === "fecha_desc") arr.sort((a,b) => new Date(b.fecha) - new Date(a.fecha));
        if (sort === "fecha_asc") arr.sort((a,b) => new Date(a.fecha) - new Date(b.fecha));
        if (sort === "total_desc") arr.sort((a,b) => b.total - a.total);
        if (sort === "total_asc") arr.sort((a,b) => a.total - b.total);
        return arr;
    }, [filtered, sort]);

    return {
        filters,
        setFilters,
        sort,
        setSort,
        data: sorted
    };
}
