const STORAGE_KEY = "admin_ventas_v1";

/* ================================
   Utils internos
================================ */
function safeParse(data, fallback = []) {
    try {
        return JSON.parse(data);
    } catch {
        return fallback;
    }
}

function now() {
    return new Date().toISOString();
}

/* ================================
   CRUD PRINCIPAL
================================ */

/**
 * Guarda ventas completas
 */
export function saveVentas(ventas) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ventas));
    } catch (err) {
        console.error("❌ Error guardando ventas:", err);
    }
}

/**
 * Carga ventas (fallback seguro)
 */
export function loadVentas(fallback = []) {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? safeParse(data, fallback) : fallback;
    } catch (err) {
        console.error("❌ Error leyendo ventas:", err);
        return fallback;
    }
}

/**
 * Limpia todas las ventas
 */
export function clearVentas() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
        console.error("❌ Error limpiando ventas:", err);
    }
}

/**
 * Agrega una venta nueva (con metadata)
 */
export function addVenta(venta) {
    const ventas = loadVentas();
    const nuevaVenta = {
        ...venta,
        createdAt: now(),
        updatedAt: now(),
    };
    ventas.push(nuevaVenta);
    saveVentas(ventas);
    return ventas;
}

/**
 * Actualiza una venta por id
 */
export function updateVenta(id, updates) {
    const ventas = loadVentas().map((v) =>
        v.id === id
            ? { ...v, ...updates, updatedAt: now() }
            : v
    );
    saveVentas(ventas);
    return ventas;
}

/**
 * Actualiza SOLO estado (operativo)
 */
export function updateVentaEstado(id, estado) {
    return updateVenta(id, { estado });
}

/**
 * Elimina una venta
 */
export function deleteVenta(id) {
    const ventas = loadVentas().filter((v) => v.id !== id);
    saveVentas(ventas);
    return ventas;
}

/* ================================
   Helpers (para UI)
================================ */

/**
 * Obtiene una venta por ID
 */
export function getVentaById(id) {
    return loadVentas().find((v) => v.id === id) || null;
}

/**
 * Verifica si hay ventas guardadas
 */
export function hasVentas() {
    return !!localStorage.getItem(STORAGE_KEY);
}
