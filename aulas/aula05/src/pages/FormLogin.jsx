import { useState } from "react";
// Guarda um valor dentro do componentes

import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function FormLogin (props) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState();

// clicar e continuar o mesmo endereço sem atualizar
    const efetuaLogin = (e) => {
        e.preventDefault();
        props.navegaPara("/home");
    // chamadda ao Backend
    }

    return (
        <form onSubmit={efetuaLogin}>
            <InputEmail texto="E-mail" valor={email} mudaValor={setEmail}/>
            <InputSenha texto="Senha" valor={senha} mudaValor={setSenha}/>
            <Botao texto="Entrar"/>
        </form>
    );
}
  
export default FormLogin;