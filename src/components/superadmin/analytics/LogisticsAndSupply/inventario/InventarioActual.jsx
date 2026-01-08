import CoberturaInventario from "./CoberturaInventario";
import EstadoStock from "./EstadoStock";
import InventarioKPIs from "./InventarioKPIs";
import MovimientoInventario from "./MovimientoInventario";
import ProductosCriticos from "./ProductosCriticos";
import RotacionResumen from "./RotacionResumen";


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
            < ProductosCriticos/>

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
