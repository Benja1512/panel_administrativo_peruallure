import "../../../styles/admin/UserBulkUpload.css";

export default function UserBulkUpload() {
    return (
        <div className="bulk-upload">
            <h3>Carga Masiva de Usuarios</h3>
            <input type="file" />
            <button>Subir</button>
        </div>
    );
}
