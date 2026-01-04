import React from "react";
import "../../../../styles/analyticsIA/DesviacionForecast.css"

const DesviacionForecast = () => {
    const resultados = {
        MAE: 420.5,
        RMSE: 523.1,
        MAPE: "8.7%",
    };

    const topProductos = [
        { nombre: "Leche Entera 1L", mape: "15.3%" },
        { nombre: "Cereal Avena 500g", mape: "12.1%" },
        { nombre: "Café Molido 250g", mape: "11.7%" },
    ];

    return (
        <div className="panel-card p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">📉 Desviación del Forecast</h2>
            <p className="text-gray-600 mb-4">Medición del error entre pronóstico y demanda real usando modelos IA.</p>

            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <h3 className="text-lg font-semibold">MAE</h3>
                    <p className="text-xl text-blue-600">{resultados.MAE}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
                    <h3 className="text-lg font-semibold">RMSE</h3>
                    <p className="text-xl text-green-600">{resultados.RMSE}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-xl text-center">
                    <h3 className="text-lg font-semibold">MAPE</h3>
                    <p className="text-xl text-red-600">{resultados.MAPE}</p>
                </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl mb-4">
                <p className="text-gray-500 text-center">📊 Gráfico Forecast vs Real (pendiente de integrar)</p>
            </div>

            <div className="mt-4">
                <h4 className="font-semibold mb-2">🔍 Top productos con mayor desviación:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                    {topProductos.map((prod, index) => (
                        <li key={index}>
                            {prod.nombre} — <span className="font-semibold">{prod.mape}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 text-right">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                    Ver detalle completo
                </button>
            </div>
        </div>
    );
};

export default DesviacionForecast;
