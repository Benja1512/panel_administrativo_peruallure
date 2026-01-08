import React from "react";

const SectionLayout = ({ title, description, icon, children }) => {
    return (
        <section className="card">
            <h2 className="card-title">
                {icon && <span className="card-icon">{icon}</span>}
                {title}
            </h2>

            {description && (
                <p className="card-description">{description}</p>
            )}

            <div className="card-content">
                {children}
            </div>
        </section>
    );
};

export default SectionLayout;
