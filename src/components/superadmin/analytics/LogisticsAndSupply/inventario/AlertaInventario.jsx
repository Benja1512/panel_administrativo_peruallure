const AlertaInventario = () => {
    return (
        <div className="alerta-inventario">
            <h3 className="section-title">⚠️ Alerta de Inventario</h3>
            <p>
                <strong>6 productos</strong> se encuentran por debajo del stock mínimo.
                Revisión recomendada.
            </p>
        </div>
    );
};

export default AlertaInventario;
