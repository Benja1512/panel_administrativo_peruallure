import React from "react";
import { Routes, Route } from "react-router-dom";
import AnalyticsSuperAdmin from "./AnalyticsSuperAdmin";

const AnalyticsRouter = () => {
    return (
        <Routes>
            <Route index element={<AnalyticsSuperAdmin />} />
        </Routes>
    );
};

export default AnalyticsRouter;
