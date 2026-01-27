import { useEffect, useMemo, useState } from "react";
import { loadViews, saveViews } from "./ventasViewsStorage";

export default function useEnterprisePro({ defaultStore = "ALL", defaultCurrency = "EUR" } = {}) {
    const [storeId, setStoreId] = useState(defaultStore);
    const [currency, setCurrency] = useState(defaultCurrency);
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("pa_dark") === "1");
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [refreshEverySec, setRefreshEverySec] = useState(15);

    const [views, setViews] = useState(() => loadViews());
    const [activeViewId, setActiveViewId] = useState(views?.[0]?.id || null);

    useEffect(() => {
        localStorage.setItem("pa_dark", darkMode ? "1" : "0");
        document.documentElement.classList.toggle("pa-dark", darkMode);
    }, [darkMode]);

    const activeView = useMemo(
        () => views.find((v) => v.id === activeViewId) || null,
        [views, activeViewId]
    );

    const saveView = (payload) => {
        const id = crypto.randomUUID();
        const next = [{ id, name: payload.name || `Vista ${views.length + 1}`, ...payload }, ...views];
        setViews(next);
        setActiveViewId(id);
        saveViews(next);
    };

    const deleteView = (id) => {
        const next = views.filter((v) => v.id !== id);
        setViews(next);
        saveViews(next);
        if (activeViewId === id) setActiveViewId(next?.[0]?.id || null);
    };

    const updateView = (id, patch) => {
        const next = views.map((v) => (v.id === id ? { ...v, ...patch } : v));
        setViews(next);
        saveViews(next);
    };

    return {
        storeId, setStoreId,
        currency, setCurrency,
        darkMode, setDarkMode,
        autoRefresh, setAutoRefresh,
        refreshEverySec, setRefreshEverySec,

        views, activeViewId, setActiveViewId,
        activeView,
        saveView, deleteView, updateView,
    };
}
