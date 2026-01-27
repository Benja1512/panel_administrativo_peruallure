import React from "react";
import "./ReportsSkeleton.css";

export default function ReportsSkeleton() {
    return (
        <div className="reports-skeleton">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="skeleton-row">
                    <div className="sk-name" />
                    <div className="sk-type" />
                    <div className="sk-date" />
                    <div className="sk-btn" />
                </div>
            ))}
        </div>
    );
}
