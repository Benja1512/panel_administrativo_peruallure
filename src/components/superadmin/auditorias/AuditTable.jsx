// src/components/superadmin/AuditTable.jsx
import React, { useState } from 'react';
import Pagination from '../shared/Pagination';
import AuditDetailsModal from './AuditDetailsModal';
import AuditExportButton from './AuditExportButton';
import './AuditTable.css';

const AuditTable = ({ logs, loading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [sortedLogs, setSortedLogs] = useState(logs);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLog, setSelectedLog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const totalPages = Math.ceil(sortedLogs.length / pageSize);

    /// 🔄 **Cambio de Página**
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    /// 🔎 **Ordenamiento de Columnas**
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });

        const sortedData = [...logs].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setSortedLogs(sortedData);
    };

    /// 🔎 **Filtrar por búsqueda**
    const handleSearch = (term) => {
        setSearchTerm(term);
        if (term === '') {
            setSortedLogs(logs);
        } else {
            const filtered = logs.filter((log) =>
                Object.values(log).some((value) =>
                    String(value).toLowerCase().includes(term.toLowerCase())
                )
            );
            setSortedLogs(filtered);
        }
    };

    /// 🛠️ **Abrir Modal**
    const openModal = (log) => {
        setSelectedLog(log);
        setIsModalOpen(true);
    };

    if (loading) {
        return <p>⏳ Cargando registros...</p>;
    }

    // 🔍 **Datos Paginados**
    const paginatedLogs = sortedLogs.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="audit-table">
            <h3>📋 Historial de Auditoría</h3>

            <input
                type="text"
                placeholder="🔎 Buscar en el historial..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-input"
            />

            <AuditExportButton logs={logs} />

            <table>
                <thead>
                <tr>
                    <th onClick={() => handleSort('id')}>ID 🔃</th>
                    <th onClick={() => handleSort('usuario')}>Usuario 🔃</th>
                    <th onClick={() => handleSort('accion')}>Acción 🔃</th>
                    <th onClick={() => handleSort('fecha')}>Fecha 🔃</th>
                    <th>IP</th>
                    <th>Navegador</th>
                    <th>🔍 Detalle</th>
                </tr>
                </thead>
                <tbody>
                {paginatedLogs.map((log, index) => (
                    <tr key={index}>
                        <td>{log.id}</td>
                        <td>{log.usuario}</td>
                        <td>{log.accion}</td>
                        <td>{new Date(log.fecha).toLocaleString()}</td>
                        <td>{log.ip}</td>
                        <td>{log.navegador}</td>
                        <td>
                            <button onClick={() => openModal(log)}>🔍 Ver Detalle</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <AuditDetailsModal
                log={selectedLog}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default AuditTable;
