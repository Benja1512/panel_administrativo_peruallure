import React from "react";
import "../../../../../styles/TopProductos.css";

/* 🔝 Datos de 12 productos más vendidos */
const productos = [
    { nombre: "Laptop Pro X", ventas: 312 },
    { nombre: "iPhone 15 Nova", ventas: 263 },
    { nombre: "SmartWatch Neo", ventas: 221 },
    { nombre: "Audífonos Aura Max", ventas: 190 },
    { nombre: "Monitor UltraWave 4K", ventas: 156 },
    { nombre: "Tablet FlexiPad 11", ventas: 144 },
    { nombre: "Teclado ProMec", ventas: 132 },
    { nombre: "Mouse AirClick", ventas: 128 },
    { nombre: "Router Infinity X", ventas: 122 },
    { nombre: "Cámara VisionCloud", ventas: 118 },
    { nombre: "SSD Turbo NVX", ventas: 110 },
    { nombre: "Cargador FastCharge", ventas: 103 },
];

/* 🥇 Mejor producto */
const mejor = productos.reduce(
    (max, item) => item.ventas > max.ventas ? item : max,
    productos[0]
);

const TopProductos = () => {
    return (
        <div className="topprod-card">
            <h2>🏆 Top Productos Más Vendidos</h2>
            <p className="descripcion">
                Ranking de productos según volumen de ventas en los últimos reportes.
            </p>

            {/* 🎯 Banda resumen */}
            <div className="topprod-resumen">
                <span>🥇 Mejor producto:</span>
                <strong>{mejor.nombre} → {mejor.ventas} uds</strong>
            </div>

            {/* 📦 Cuadros estilo Facturación Diaria / MRR */}
            <div className="topprod-grid">
                {productos.map((p, i) => {
                    const esMejor = p.nombre === mejor.nombre;
                    return (
                        <div className={`topprod-item ${esMejor ? "best" : ""}`} key={i}>
                            <span className="p-nombre">{p.nombre}</span>
                            <span className="p-separador">|</span>
                            <strong className="p-ventas">{p.ventas} uds</strong>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopProductos;
