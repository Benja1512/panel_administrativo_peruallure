import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useMemo } from "react";
import { useDrillDown } from "../enterprisePro/DrillDownProvider";

export default function VentasPorCanalChart({ ventas }) {
    const { openDrill } = useDrillDown();

    // ✅ Agrupar ventas reales por canal
    const data = useMemo(() => {
        const map = {};
        ventas.forEach((v) => {
            map[v.canal] = (map[v.canal] || 0) + Number(v.total || 0);
        });

        return Object.entries(map).map(([canal, total]) => ({
            canal,
            total,
        }));
    }, [ventas]);

    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
                <XAxis dataKey="canal" />
                <YAxis />
                <Tooltip />

                <Bar
                    dataKey="total"
                    cursor="pointer"
                    fill="#2563eb"
                    activeBar={{ fill: "#1d4ed8" }}
                    onClick={(bar) => {
                        const canal = bar?.payload?.canal;
                        if (!canal) return;

                        openDrill({
                            title: `Canal: ${canal}`,
                            filter: { field: "canal", value: canal },
                        });
                    }}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
