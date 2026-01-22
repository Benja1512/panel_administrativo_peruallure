import { useState } from "react";

export default function AuditFilters({ onFilter }) {
    const [usuario, setUsuario] = useState("");
    const [accion, setAccion] = useState("");
    const [fecha, setFecha] = useState("");

    const aplicarFiltros = () => {
        onFilter?.({ usuario, accion, fecha });
    };

    const limpiarFiltros = () => {
        setUsuario("");
        setAccion("");
        setFecha("");
        onFilter?.({});
    };

    return (
        <div
            style={{
                display: "flex",
                gap: 10,
                marginBottom: 15,
                alignItems: "center",
            }}
        >
            <input
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />

            <input
                placeholder="Acción"
                value={accion}
                onChange={(e) => setAccion(e.target.value)}
            />

            <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
            />

            <button onClick={aplicarFiltros}>Filtrar</button>
            <button onClick={limpiarFiltros}>Limpiar</button>
        </div>
    );
}
