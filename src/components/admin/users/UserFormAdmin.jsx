import { useState } from "react";
import "../../../styles/admin/UserFormAdmin.css";

export default function UserFormAdmin() {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        rol: ""
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const submit = (e) => {
        e.preventDefault();
        alert("Usuario creado");
    };

    return (
        <form className="user-form" onSubmit={submit}>
            <input name="nombre" placeholder="Nombre" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <select name="rol" onChange={handleChange}>
                <option value="">Seleccione rol</option>
                <option>Admin</option>
                <option>Gestor</option>
                <option>Vendedor</option>
            </select>

            <button>Guardar</button>
        </form>
    );
}
