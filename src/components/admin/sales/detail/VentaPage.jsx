import VentasTable from "../table/VentasTable";

export default function VentaPage() {
    const handleView = (venta) => {
        console.log("Abrir modal", venta);
    };

    const handleExport = (venta) => {
        console.log("Exportar PDF", venta);
    };

    return (
        <VentasTable
            data={ventas}
            onView={handleView}
            onExport={handleExport}
        />
    );
}
