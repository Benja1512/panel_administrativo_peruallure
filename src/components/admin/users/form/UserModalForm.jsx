import "../../../../styles/admin/UserModalForm.css";

export default function UserModalForm({ children, onClose }) {
    return (
        <div className="modal-backdrop">
            <div className="modal-box">
                {children}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}
