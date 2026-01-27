const KEY = "reports-history";

/* =========================
   Obtener historial
========================= */
export const getReports = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

/* =========================
   Guardar nuevo reporte
========================= */
export const saveReport = (report) => {
    const history = getReports();

    history.unshift({
        id: Date.now(),
        ...report
    });

    localStorage.setItem(KEY, JSON.stringify(history));
};

/* =========================
   Eliminar reporte
========================= */
export const deleteReport = (id) => {
    const history = getReports().filter(r => r.id !== id);
    localStorage.setItem(KEY, JSON.stringify(history));
};

/* =========================
   Limpiar historial completo
========================= */
export const clearReports = () => {
    localStorage.removeItem(KEY);
};
