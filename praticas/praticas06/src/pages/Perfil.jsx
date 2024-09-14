import Conteudo from "../components/Conteudo";
import Titulo from "../components/Titulo";
import Menu from "../components/Menu";

function Perfil (props) {
    return (
        <Conteudo>
            <Titulo texto="Perfil do Usuário" />
            <Menu navegaPara={props.navegaPara} />
        </Conteudo>
    );
}

export default Perfil;