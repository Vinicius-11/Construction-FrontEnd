import InputPesquisar from "./InputPesquisar";
import Logo from "./Logo";
import Titulo from "./Titulo";

function Cabecalho () {
    return( 
        <header>
            <Logo imagem="https://www.svgrepo.com/show/489120/school.svg" texto="Logo da Aplicação" />
            <Titulo texto="Aluno Online" />
            <InputPesquisar />
            <Logo imagem="https://www.svgrepo.com/show/532555/search.svg" texto="Icone Pesquisar" />
        </header>
    );
}

export default Cabecalho;