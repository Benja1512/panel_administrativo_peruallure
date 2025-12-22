// src/components/superadmin/AuditDetailsModal.jsx
import React from 'react';
import './AuditDetailsModal.css';

const AuditDetailsModal = ({ log, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="audit-modal-overlay">
            <div className="audit-modal">
                <h2>📋 Detalles de Auditoría</h2>
                <div className="audit-info">
                    <p><strong>ID:</strong> {log.id}</p>
                    <p><strong>Usuario:</strong> {log.usuario}</p>
                    <p><strong>Acción:</strong> {log.accion}</p>
                    <p><strong>Fecha:</strong> {new Date(log.fecha).toLocaleString()}</p>
                    <p><strong>IP:</strong> {log.ip}</p>
                    <p><strong>Navegador:</strong> {log.navegador}</p>
                    <p><strong>Detalles Adicionales:</strong></p>
                    <pre>{log.detalle}</pre>
                </div>
                <button className="btn-close" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default AuditDetailsModal;
