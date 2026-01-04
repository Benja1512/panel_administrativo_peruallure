import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Download } from "lucide-react";
import "../../../../styles/analyticsIA/StockCritico.css"

// Simulación de datos críticos de inventario
const productosCriticos = [
    { id: "P001", nombre: "Leche entera 1L", stockActual: 18, stockMinimo: 25, riesgo: "Alto" },
    { id: "P002", nombre: "Pan de molde integral", stockActual: 9, stockMinimo: 15, riesgo: "Crítico" },
    { id: "P003", nombre: "Aceite vegetal 1L", stockActual: 12, stockMinimo: 20, riesgo: "Moderado" },
];

const StockCritico = () => {
    const exportarCSV = () => {
        const encabezado = "ID,Producto,Stock actual,Stock mínimo,Nivel de riesgo\n";
        const filas = productosCriticos.map(p =>
            `${p.id},${p.nombre},${p.stockActual},${p.stockMinimo},${p.riesgo}`
        ).join("\n");

        const blob = new Blob([encabezado + filas], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "stock_critico.csv";
        a.click();
    };

    return (
        <div className="p-6">
            <Card className="bg-white shadow-md rounded-2xl p-4">
                <CardContent>
                    <div className="flex items-center mb-4">
                        <AlertTriangle className="text-yellow-500 mr-2" />
                        <h2 className="text-2xl font-bold text-gray-800">
                            Forecast de Stock Crítico
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                        Productos con riesgo de quiebre de stock según niveles mínimos definidos.
                    </p>

                    {/* Tabla de productos en riesgo */}
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border border-yellow-200 rounded-lg">
                            <thead className="bg-yellow-100 text-yellow-900">
                            <tr>
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">Producto</th>
                                <th className="px-4 py-2 text-left">Stock actual</th>
                                <th className="px-4 py-2 text-left">Stock mínimo</th>
                                <th className="px-4 py-2 text-left">Riesgo</th>
                            </tr>
                            </thead>
                            <tbody>
                            {productosCriticos.map((p) => (
                                <tr key={p.id} className="border-t border-yellow-200">
                                    <td className="px-4 py-2">{p.id}</td>
                                    <td className="px-4 py-2">{p.nombre}</td>
                                    <td className="px-4 py-2">{p.stockActual}</td>
                                    <td className="px-4 py-2">{p.stockMinimo}</td>
                                    <td className={`px-4 py-2 font-semibold ${
                                        p.riesgo === "Crítico"
                                            ? "text-red-600"
                                            : p.riesgo === "Alto"
                                                ? "text-yellow-600"
                                                : "text-orange-600"
                                    }`}>
                                        {p.riesgo}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Botón para exportar CSV */}
                    <div className="mt-6 text-right">
                        <button
                            onClick={exportarCSV}
                            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm"
                        >
                            <Download className="w-4 h-4 mr-2" /> Exportar CSV
                        </button>
                    </div>

                    {/* Espacio reservado para IA */}
                    {/*
                    <div className="mt-4 text-gray-500 italic">
                        Próximamente: Predicción automática de quiebres usando IA (modelo Prophet / Keras).
                    </div>
                    */}
                </CardContent>
            </Card>
        </div>
    );
};

export default StockCritico;
