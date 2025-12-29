// src/pages/superadmin/DetalleComparativaPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const DetalleComparativaPage = () => {
    const { id } = useParams();

    return (
        <div className="page-container">
            <h1>Detalle de Comparativa</h1>
            <p>ID Comparativa: {id}</p>
        </div>
    );
};

export default DetalleComparativaPage;
