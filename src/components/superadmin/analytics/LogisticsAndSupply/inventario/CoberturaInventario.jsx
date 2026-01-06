const CoberturaInventario = () => {
    return (
        <div className="cobertura-inventario">
            <h3 className="section-title">📆 Cobertura de Inventario</h3>

            <div className="cobertura-grid">
                <div>
                    <span>Promedio</span>
                    <strong>18 días</strong>
                </div>
                <div className="warning">
                    <span>Mínima</span>
                    <strong>3 días</strong>
                </div>
            </div>
        </div>
    );
};

export default CoberturaInventario;
