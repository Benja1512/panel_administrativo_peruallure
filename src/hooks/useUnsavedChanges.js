import { useEffect } from "react";

export default function useUnsavedChanges(hasChanges) {
    useEffect(() => {
        const handler = (e) => {
            if (!hasChanges) return;
            e.preventDefault();
            e.returnValue = "";
        };

        window.addEventListener("beforeunload", handler);
        return () => window.removeEventListener("beforeunload", handler);
    }, [hasChanges]);
}
