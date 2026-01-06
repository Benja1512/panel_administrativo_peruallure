const MovimientoInventario = () => {
    return (
        <div className="movimiento-inventario">
            <h3 className="section-title">🔄 Movimiento de Inventario (30 días)</h3>

            <div className="movimiento-grid">
                <div className="positivo">⬆ Entradas: +3,200</div>
                <div className="negativo">⬇ Salidas: −3,050</div>
                <div className="neutral">Δ Neto: +150</div>
            </div>
        </div>
    );
};

export default MovimientoInventario;
