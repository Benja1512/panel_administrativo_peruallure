import React from "react";

const KpiCard = ({ title, value, sub, onClick, variant }) => {
    return (
        <div
            className={`kpi-card clickable ${variant || ""}`}
            onClick={onClick}
            style={{ cursor: onClick ? "pointer" : "default" }}
        >
            <span className="kpi-title">{title}</span>
            <span className="kpi-value">{value}</span>
            {sub && <span className="kpi-sub">{sub}</span>}
        </div>
    );
};

export default KpiCard;
