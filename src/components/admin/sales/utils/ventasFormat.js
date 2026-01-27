/**
 * Formatea un número como moneda (EUR por defecto)
 */
export function formatCurrency(value, currency = "EUR", locale = "es-ES") {
    if (value == null || isNaN(value)) return "-";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2
    }).format(value);
}

/**
 * Formatea fecha YYYY-MM-DD → DD/MM/YYYY
 */
export function formatDate(date) {
    if (!date) return "-";
    const d = new Date(date);
    return d.toLocaleDateString("es-ES");
}

/**
 * Formatea estado de venta (para UI)
 */
export function formatEstado(estado) {
    switch (estado) {
        case "pagado":
            return "Pagado";
        case "pendiente":
            return "Pendiente";
        case "cancelado":
            return "Cancelado";
        default:
            return estado;
    }
}

/**
 * Devuelve clase CSS según estado
 */
export function estadoClass(estado) {
    switch (estado) {
        case "pagado":
            return "success";
        case "pendiente":
            return "warning";
        case "cancelado":
            return "danger";
        default:
            return "";
    }
}

/**
 * Formatea ID de venta
 */
export function formatVentaId(id) {
    return `#${id}`;
}
