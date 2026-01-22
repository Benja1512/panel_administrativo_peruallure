import React, { useMemo } from "react";
import "../../../../styles/gestionAdministrativa/permisos//PermissionTemplates.css";

const DEFAULT_TEMPLATES = [
    {
        id: "full_admin",
        name: "Administrador total",
        permissions: [
            "USER_CREATE",
            "USER_EDIT",
            "USER_DELETE",
            "ROLES_MANAGE",
            "PERMISSIONS_MANAGE",
            "ORDERS_VIEW",
            "ORDERS_EDIT",
            "INVENTORY_VIEW",
            "INVENTORY_EDIT",
            "REPORTS_EXPORT",
        ],
    },
    {
        id: "ventas",
        name: "Ventas",
        permissions: ["ORDERS_VIEW", "ORDERS_EDIT"],
    },
    {
        id: "almacen",
        name: "Almacén",
        permissions: ["INVENTORY_VIEW", "INVENTORY_EDIT"],
    },
    {
        id: "cliente",
        name: "Cliente",
        permissions: ["ORDERS_VIEW"],
    },
];

const PermissionTemplates = ({
                                 templates = DEFAULT_TEMPLATES,
                                 onApply = () => {},
                             }) => {
    const list = useMemo(() => templates ?? [], [templates]);

    if (!list.length) return null;

    return (
        <div className="ap-card ap-templates">
            <label>📦 Plantillas de permisos</label>

            <div className="ap-templates-grid">
                {list.map((tpl) => (
                    <button
                        key={tpl.id}
                        type="button"
                        className="ap-template-btn"
                        onClick={() => onApply(tpl.permissions)}
                    >
                        {tpl.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PermissionTemplates;
