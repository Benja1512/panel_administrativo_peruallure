const InventarioKPIs = () => {
    return (
        <div className="kpi-grid">
            <div className="kpi">
                <span className="kpi-label">Stock Total</span>
                <span className="kpi-value">12,480 u</span>
            </div>

            <div className="kpi">
                <span className="kpi-label">Valor del Inventario</span>
                <span className="kpi-value">€248,000</span>
            </div>

            <div className="kpi success">
                <span className="kpi-label">Stock Saludable</span>
                <span className="kpi-value">92%</span>
            </div>

            <div className="kpi warning">
                <span className="kpi-label">Productos Críticos</span>
                <span className="kpi-value">6</span>
            </div>
        </div>
    );
};

export default InventarioKPIs;
