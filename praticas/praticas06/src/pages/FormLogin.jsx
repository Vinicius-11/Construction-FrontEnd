import { useState } from "react";

import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function FormLogin(props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    return (
        <form>
            <InputEmail valor={email} mudaValor={(e) => setEmail(e.target.value)} />
            <InputSenha valor={senha} mudaCalor={(e) => setSenha(e.target.value)} />
            <Botao texto="Entrar" navegaPara={props.navegaPara} /> 
        </form>
    );
}
  
export default FormLogin;