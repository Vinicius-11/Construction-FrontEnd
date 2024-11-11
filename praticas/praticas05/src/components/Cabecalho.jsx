import Icone from "./Icone";
import Titulo from "./Titulo";
import InputPesquisar from "./InputPesquisar";
import "./Cabecalho.css";

function Cabecalho() {
    return (
        <header>
            <div>
                <Icone imagem="https://www.svgrepo.com/show/489120/school.svg" texto="Logo do Aplicação" />
                <Titulo texto="Aluno Online" />
            </div>
            <div>
                <InputPesquisar />
                <Icone imagem="https://www.svgrepo.com/show/532555/search.svg" texto="Icone Pesquisar" />
            </div>
        </header>
    );
}

export default Cabecalho;