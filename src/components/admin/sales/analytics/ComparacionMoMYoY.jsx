import "../../../../styles/admin/sales/ComparacionMoMYoY.css";

export default function ComparacionMoMYoY({ ventas = [] }) {
    // agrupamos por mes
    const porMes = ventas.reduce((acc, v) => {
        const mes = v.fecha.slice(0, 7); // YYYY-MM
        acc[mes] = (acc[mes] || 0) + v.total;
        return acc;
    }, {});

    const meses = Object.keys(porMes).sort();
    const actual = meses[meses.length - 1];
    const anterior = meses[meses.length - 2];

    const totalActual = porMes[actual] || 0;
    const totalAnterior = porMes[anterior] || 0;

    const variacion =
        totalAnterior === 0
            ? 0
            : ((totalActual - totalAnterior) / totalAnterior) * 100;

    return (
        <div className="card highlight">
            <h4>Comparación MoM</h4>

            <div className="mom-row">
                <span>Mes actual</span>
                <b>€ {totalActual.toFixed(2)}</b>
            </div>

            <div className="mom-row">
                <span>Mes anterior</span>
                <b>€ {totalAnterior.toFixed(2)}</b>
            </div>

            <div
                className={`mom-diff ${variacion >= 0 ? "up" : "down"}`}
            >
                {variacion >= 0 ? "▲" : "▼"} {variacion.toFixed(1)} %
            </div>
        </div>
    );
}
