import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function Perfil () {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Conteudo>
                <Menu />
                <Secao texto="Perfil do Usuario">
                    <InputEmail />
                    <InputSenha />
                    <Botao texto="Salvar" />
                </Secao>
            </Conteudo>
        </>
    );
}

export default Perfil;