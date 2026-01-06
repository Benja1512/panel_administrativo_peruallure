import EstadoStock from "./EstadoStock";
import AlertaInventario from "./AlertaInventario";
import CoberturaInventario from "./CoberturaInventario";
import MovimientoInventario from "./MovimientoInventario";
import RotacionResumen from "./RotacionResumen";
import InventarioKPIs from "./InventarioKPIs";

const InventarioActual = () => {
    return (
        <section className="card inventario-actual">
            <header className="card-header">
                <h2 className="card-title">📦 Inventario Actual</h2>
                <p className="card-description">
                    Estado general del inventario y métricas clave en tiempo real.
                </p>
            </header>

            {/* 1️⃣ KPIs GENERALES */}
            <InventarioKPIs />

            {/* 2️⃣ ESTADO GENERAL DEL STOCK */}
            <EstadoStock />

            {/* 3️⃣ ALERTA RESUMIDA DE INVENTARIO CRÍTICO */}
            <AlertaInventario />

            {/* 4️⃣ COBERTURA DE INVENTARIO */}
            <CoberturaInventario />

            {/* 5️⃣ MOVIMIENTO DE INVENTARIO */}
            <MovimientoInventario />

            {/* 6️⃣ ROTACIÓN (RESUMEN) */}
            <RotacionResumen />
        </section>
    );
};

export default InventarioActual;
