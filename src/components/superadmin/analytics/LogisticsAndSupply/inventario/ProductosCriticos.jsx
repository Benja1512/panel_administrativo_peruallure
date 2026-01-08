import React from "react";
import { AlertTriangle } from "lucide-react";
import SectionLayout from "../../../../shared/SectionLayout";
import "../../../../../styles/ProductosCriticos.css";

const ProductosCriticos = () => {
    const productos = [
        { id: 1, nombre: "Producto A", sku: "SKU-001", stock: 8, minimo: 20 },
        { id: 2, nombre: "Producto B", sku: "SKU-014", stock: 5, minimo: 15 },
        { id: 3, nombre: "Producto C", sku: "SKU-032", stock: 2, minimo: 10 },
        { id: 4, nombre: "Producto D", sku: "SKU-087", stock: 9, minimo: 25 },
        { id: 5, nombre: "Producto E", sku: "SKU-104", stock: 6, minimo: 18 },
        { id: 6, nombre: "Producto F", sku: "SKU-156", stock: 3, minimo: 12 },
    ];

    return (
        <SectionLayout
            title="Productos Críticos"
            description="Listado de productos con stock por debajo del nivel mínimo recomendado."
            icon={<AlertTriangle size={18} />}
        >
            <div className="tabla-criticos">
                <table>
                    <thead>
                    <tr>
                        <th>Producto</th>
                        <th>SKU</th>
                        <th>Stock Actual</th>
                        <th>Stock Mínimo</th>
                        <th>Estado</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.nombre}</td>
                            <td>{p.sku}</td>
                            <td className="stock-actual">{p.stock}</td>
                            <td>{p.minimo}</td>
                            <td>
                                <span className="estado critico">Crítico</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <p className="insight">
                ⚠️ Se recomienda priorizar reposición inmediata para evitar quiebres de stock y retrasos en pedidos.
            </p>
        </SectionLayout>
    );
};

export default ProductosCriticos;
