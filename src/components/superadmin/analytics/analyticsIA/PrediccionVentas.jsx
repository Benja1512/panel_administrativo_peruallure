// components/superadmin/analytics/DesviacionForecast.css/PrediccionVentas.jsx
import React from "react";
import "../../../../styles/analyticsIA/prediccionIA.css"

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const datos = [
    { semana: "Semana 1", real: 840, pred: 850 },
    { semana: "Semana 2", real: 920, pred: 910 },
    { semana: "Semana 3", real: 970, pred: 960 },
    { semana: "Semana 4", real: 1020, pred: 1015 },
    { semana: "Semana 5", real: 950, pred: 940 },
    { semana: "Semana 6", real: 980, pred: 990 },
];

const resultados = {
    modelo: "Red Neuronal Artificial (Keras)",
    MAE: 22.3,
    RMSE: 28.1,
    MAPE: "2.9%",
};

const PrediccionVentas = () => {

    const handleDescargarCSV = () => {
        const encabezado = "Semana,Ventas reales,Predicción IA\n";
        const filas = datos.map(d => `${d.semana},${d.real},${d.pred}`).join("\n");
        const blob = new Blob([encabezado + filas], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "prediccion_ventas.csv";
        a.click();
    };

    return (
        <div className="panel-card p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">📊 Predicción de Ventas con IA</h2>
            <p className="text-gray-600 mb-4">
                Comparación entre ventas reales y predichas usando <strong>{resultados.modelo}</strong>.
            </p>

            {/* Alerta si el modelo tiene errores altos */}
            {parseFloat(resultados.MAPE) > 5 && (
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded mb-4">
                    ⚠️ El modelo muestra un error significativo. Se recomienda revisión.
                </div>
            )}

            {/* Gráfico comparativo */}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={datos} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="semana" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="real" stroke="#8884d8" name="Ventas reales" />
                    <Line type="monotone" dataKey="pred" stroke="#82ca9d" name="Predicción IA" />
                </LineChart>
            </ResponsiveContainer>

            {/* Métricas del modelo */}
            <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold">MAE</h4>
                    <p className="text-xl text-blue-700">{resultados.MAE}</p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold">RMSE</h4>
                    <p className="text-xl text-green-700">{resultados.RMSE}</p>
                </div>
                <div className="bg-red-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold">MAPE</h4>
                    <p className="text-xl text-red-700">{resultados.MAPE}</p>
                </div>
            </div>

            {/* Explicación técnica */}
            <details className="mt-6 text-sm text-gray-600">
                <summary className="cursor-pointer font-medium text-blue-700">
                    ¿Cómo se generó esta predicción?
                </summary>
                <p className="mt-2">
                    Esta predicción fue realizada con un modelo de Red Neuronal Artificial (Keras ANN)
                    entrenado con datos históricos semanales. El modelo utiliza capas densas, función de activación ReLU y optimizador Adam para minimizar la pérdida durante el entrenamiento.
                </p>
            </details>

            {/* Botones de acción */}
            <div className="mt-6 flex justify-between items-center">
                <button
                    onClick={handleDescargarCSV}
                    className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-2 rounded"
                >
                    📥 Descargar CSV
                </button>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                    Ver análisis completo
                </button>
            </div>
        </div>
    );
};

export default PrediccionVentas;
