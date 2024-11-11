import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";

function Registrar() {
    const navigate = useNavigate();
    const { registrar } = useContext(AuthContext);

    const onEnviar = async (data) => {
        registrar(data);
    }

    return (
        <>
            <h1>Registrar</h1>
            <Formulario onEnviar={onEnviar} />
        </>
    );
}

export default Registrar;