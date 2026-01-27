const ventasMock = [
    {
        id: "V-001",
        cliente: "María López",
        fecha: "2026-01-10",
        canal: "Web",
        categoria: "Perfumes",
        total: 230,
        estado: "Pagado",
        productos: [
            { id: 1, name: "Perfume Andino", qty: 2, price: 55 },
            { id: 2, name: "Crema Facial Premium", qty: 1, price: 45 }
        ],
        pago: {
            subtotal: 155,
            impuestos: 29.45,
            total: 184.45,
            metodo: "Tarjeta"
        }
    },
    {
        id: "V-002",
        cliente: "Carlos Ruiz",
        fecha: "2026-01-15",
        canal: "Tienda",
        categoria: "Kits",
        total: 120,
        estado: "Pendiente",
        productos: [
            { id: 3, name: "Kit Spa Home", qty: 1, price: 120 }
        ],
        pago: {
            subtotal: 120,
            impuestos: 22.8,
            total: 142.8,
            metodo: "Efectivo"
        }
    },
    {
        id: "V-003",
        cliente: "Ana Torres",
        fecha: "2026-01-20",
        canal: "Marketplace",
        categoria: "Kits",
        total: 560,
        estado: "Enviado",
        productos: [
            { id: 4, name: "Set Premium Belleza", qty: 2, price: 280 }
        ],
        pago: {
            subtotal: 560,
            impuestos: 106.4,
            total: 666.4,
            metodo: "Transferencia"
        }
    },
    {
        id: "V-004",
        cliente: "Luis Vega",
        fecha: "2026-01-22",
        canal: "Web",
        categoria: "Skincare",
        total: 89,
        estado: "Cancelado",
        productos: [
            { id: 5, name: "Crema Corporal", qty: 1, price: 89 }
        ],
        pago: {
            subtotal: 89,
            impuestos: 16.91,
            total: 105.91,
            metodo: "Tarjeta"
        }
    },
    {
        id: "V-005",
        cliente: "Paula Díaz",
        fecha: "2026-01-25",
        canal: "WhatsApp",
        categoria: "Perfumes",
        total: 300,
        estado: "Reembolsado",
        productos: [
            { id: 6, name: "Pack Relax", qty: 3, price: 100 }
        ],
        pago: {
            subtotal: 300,
            impuestos: 57,
            total: 357,
            metodo: "Tarjeta"
        }
    }
];

export default ventasMock;
