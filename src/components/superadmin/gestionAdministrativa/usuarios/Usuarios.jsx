import React from "react";
import SectionLayout from "../../../shared/SectionLayout"; // o la ruta donde lo tengas
import UserList from "./UserList";
import UserForm from "./UserForm";

const Usuarios = () => {
    return (
        <SectionLayout
            title="Gestión Global de Usuarios"
            description="Crear, editar, suspender y asignar usuarios a roles."
            icon={null} // o puedes pasar un ícono si deseas
        >
            <UserForm />
            <UserList />
        </SectionLayout>
    );
};

export default Usuarios;
