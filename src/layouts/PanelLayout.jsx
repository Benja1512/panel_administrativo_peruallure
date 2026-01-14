import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/LayoutPanel.css";


const PanelLayout = () => {
    return <Outlet />;
};

export default PanelLayout;
