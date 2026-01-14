import React, { useState } from "react";
import "../../../styles/SoporteTecnico.css";

const NuevoTicketModal = () => {
    const [visible, setVisible] = useState(false);

    const toggleModal = () => setVisible(!visible);

    return (
        <div className="nuevo-ticket">
            <button onClick={toggleModal}>➕ Nuevo Ticket</button>

            {visible && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Crear Nuevo Ticket</h3>
                        <input placeholder="Asunto" />
                        <textarea placeholder="Descripción del problema" />
                        <button>Enviar</button>
                        <button onClick={toggleModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NuevoTicketModal;
