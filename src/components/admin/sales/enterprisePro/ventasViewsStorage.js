const KEY = "pa_sales_views_v1";

export function loadViews() {
    try {
        const raw = localStorage.getItem(KEY);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function saveViews(views) {
    localStorage.setItem(KEY, JSON.stringify(views));
}
