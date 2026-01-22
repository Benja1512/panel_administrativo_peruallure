import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function AuditGraph() {
    const data = [
        { fecha: "10-01", acciones: 2 },
        { fecha: "11-01", acciones: 4 },
        { fecha: "12-01", acciones: 1 },
        { fecha: "13-01", acciones: 3 }
    ];

    return (
        <div style={{ width: "100%", height: 250 }}>
            <h4>Actividad de Auditoría</h4>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="fecha" />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="acciones" stroke="#2563eb" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
