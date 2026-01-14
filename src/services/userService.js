import axios from "axios";

/**
 * ⚙️ Configuración base
 * Ajusta el puerto / URL si cambia tu backend
 */
const API_URL = "http://localhost:8081/api";

/**
 * 🔐 Helper para headers con token
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
   👤 USUARIOS
====================================================== */

/**
 * ➕ Crear usuarios
 */
export const createUsuario = async (usuario) => {
    const response = await axios.post(
        `${API_URL}/usuarios`,
        usuario,
        authHeaders()
    );
    return response.data;
};

/**
 * ✏️ Actualizar usuarios
 */
export const updateUsuario = async (id, usuario) => {
    const response = await axios.put(
        `${API_URL}/usuarios/${id}`,
        usuario,
        authHeaders()
    );
    return response.data;
};

/**
 * 📄 Obtener todos los usuarios
 */
export const getUsuarios = async () => {
    const response = await axios.get(
        `${API_URL}/usuarios`,
        authHeaders()
    );
    return response.data;
};

/**
 * ❌ Eliminar usuarios
 */
export const deleteUsuario = async (id) => {
    const response = await axios.delete(
        `${API_URL}/usuarios/${id}`,
        authHeaders()
    );
    return response.data;
};

/* ======================================================
   🧑‍💼 ROLES
====================================================== */

/**
 * 📌 Obtener roles disponibles
 */
export const getRoles = async () => {
    const response = await axios.get(
        `${API_URL}/roles`,
        authHeaders()
    );
    return response.data;
};
