import { useMemo } from "react";
import "../../../../styles/admin/sales/VentasChart.css";

export default function VentasChart() {
    // Datos simulados (12 meses)
    const data = useMemo(
        () => ([
            { month: "Feb", value: 85200 },
            { month: "Mar", value: 91000 },
            { month: "Abr", value: 99500 },
            { month: "May", value: 104200 },
            { month: "Jun", value: 97800 },
            { month: "Jul", value: 112300 },
            { month: "Ago", value: 108900 },
            { month: "Sep", value: 121400 },
            { month: "Oct", value: 118700 },
            { month: "Nov", value: 125600 },
            { month: "Dic", value: 131200 },
            { month: "Ene", value: 128450 },
        ]),
        []
    );

    const max = Math.max(...data.map(d => d.value));

    return (
        <div className="ventas-chart">
            <div className="ventas-chart__head">
                <div>
                    <h3 className="ventas-chart__title">Ventas mensuales</h3>
                    <p className="ventas-chart__subtitle">Tendencia de ingresos (simulada)</p>
                </div>
                <div className="ventas-chart__pill">Últimos 12 meses</div>
            </div>

            <div className="ventas-chart__bars" role="img" aria-label="Gráfico de barras de ventas mensuales">
                {data.map((d) => {
                    const h = Math.round((d.value / max) * 100);
                    return (
                        <div key={d.month} className="ventas-chart__barItem">
                            <div className="ventas-chart__barWrap">
                                <div className="ventas-chart__bar" style={{ height: `${h}%` }} />
                            </div>
                            <div className="ventas-chart__label">{d.month}</div>
                        </div>
                    );
                })}
            </div>

            <div className="ventas-chart__footer">
                <div className="ventas-chart__hint">
                    Consejo: usa este bloque para “comparar periodos” cuando conectes backend.
                </div>
            </div>
        </div>
    );
}

