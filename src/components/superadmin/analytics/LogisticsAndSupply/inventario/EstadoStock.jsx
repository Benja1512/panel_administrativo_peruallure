const EstadoStock = () => {
    return (
        <div className="estado-stock">
            <h3 className="section-title">📊 Estado General del Stock</h3>

            <div className="estado-grid">
                <div className="estado ok">🟢 Óptimo: 78%</div>
                <div className="estado bajo">🟡 Bajo: 14%</div>
                <div className="estado critico">🔴 Crítico: 8%</div>
            </div>
        </div>
    );
};

export default EstadoStock;
