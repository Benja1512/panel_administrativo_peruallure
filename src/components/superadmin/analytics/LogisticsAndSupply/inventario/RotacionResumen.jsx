const RotacionResumen = () => {
    return (
        <div className="rotacion-resumen">
            <h3 className="section-title">🔄 Rotación de Inventario (Resumen)</h3>

            <div className="rotacion-grid">
                <div>
                    <span>Rotación Promedio</span>
                    <strong>3.8x</strong>
                </div>
                <div>
                    <span>Días en Inventario</span>
                    <strong>26 días</strong>
                </div>
            </div>
        </div>
    );
};

export default RotacionResumen;
