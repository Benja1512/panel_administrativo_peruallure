import { createContext, useContext, useState } from "react";

const DrillCtx = createContext(null);

export function DrillDownProvider({ children }) {
    const [drill, setDrill] = useState({
        open: false,
        title: "",
        filter: null, // { field, value }
    });

    const openDrill = ({ title, filter }) => setDrill({ open: true, title, filter });
    const closeDrill = () => setDrill((d) => ({ ...d, open: false }));

    return (
        <DrillCtx.Provider value={{ drill, openDrill, closeDrill }}>
            {children}
        </DrillCtx.Provider>
    );
}

export function useDrillDown() {
    const ctx = useContext(DrillCtx);
    if (!ctx) throw new Error("useDrillDown must be used inside DrillDownProvider");
    return ctx;
}
