import { useState } from "react";

const PermissionCriticalModal = ({ open, onConfirm, onCancel, permissionName }) => {
    if (!open) return null;

    return (
        <div className="ap-modal-backdrop" role="dialog" aria-modal="true">
            <div className="ap-modal">
                <h3 className="ap-modal-title">⚠️ Permiso crítico</h3>
                <p className="ap-modal-text">
                    Estás activando un permiso crítico: <b>{permissionName}</b>.
                    Esto puede permitir acciones sensibles (borrado, gestión de roles, seguridad).
                </p>

                <div className="ap-modal-actions">
                    <button className="ap-btn ap-btn--ghost" onClick={onCancel}>
                        Cancelar
                    </button>
                    <button className="ap-btn ap-btn--primary" onClick={onConfirm}>
                        Confirmar activación
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PermissionCriticalModal;
