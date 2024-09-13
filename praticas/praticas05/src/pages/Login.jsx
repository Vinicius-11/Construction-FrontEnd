import Conteudo from "../components/Conteudo";
import Icone from "../components/Icone";
import Titulo from "../components/Titulo";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";
import Link from "../components/Link";
import Rodape from "../components/Rodape";
import "./Login.css";

function Login () {
    return (
        <>
            <Conteudo estilo="login-container">
                <Icone imagem="https://www.svgrepo.com/show/489120/school.svg" texto="Logo da Aplicação" />
                <Titulo texto="Aluno Online" />
                <InputEmail />
                <InputSenha />
                <Botao texto="Entrar"/>
                <Link texto="Esqueceu a Senha?" />
            </Conteudo>
            <Rodape texto="Copyright (C) 2024" />
        </>
    );
}

export default Login;