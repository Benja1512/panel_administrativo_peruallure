import axios from "axios";

/**
 * ⚙️ Base URL del backend
 * Ajusta el puerto si cambia
 */
const API_URL = "http://localhost:8081/api";

/**
 * 🔐 Headers con token
 */
const authHeaders = () => {
    const token = localStorage.getItem("token");

    return {
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": "application/json",
        },
    };
};

/* ======================================================
   🧑‍💼 ROLES
====================================================== */

/**
 * 📄 Obtener todos los roles
 */
const getRoles = async () => {
    const response = await axios.get(
        `${API_URL}/roles`,
        authHeaders()
    );
    return response.data;
};

/**
 * ➕ Crear rol
 */
const createRole = async (role) => {
    const response = await axios.post(
        `${API_URL}/roles`,
        role,
        authHeaders()
    );
    return response.data;
};

/**
 * ✏️ Actualizar rol
 */
const updateRole = async (id, role) => {
    const response = await axios.put(
        `${API_URL}/roles/${id}`,
        role,
        authHeaders()
    );
    return response.data;
};

/**
 * ❌ Eliminar rol
 */
const deleteRole = async (id) => {
    const response = await axios.delete(
        `${API_URL}/roles/${id}`,
        authHeaders()
    );
    return response.data;
};

/* ======================================================
   📦 EXPORT
====================================================== */

const superAdminService = {
    getRoles,
    createRole,
    updateRole,
    deleteRole,
};

export default superAdminService;
