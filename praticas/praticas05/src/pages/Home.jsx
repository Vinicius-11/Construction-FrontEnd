import Cabecalho from "../components/Cabecalho";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import Painel from "../components/Painel";
import Conteudo from "../components/Conteudo";
import "./Home.css";

function Home() {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Conteudo>
            <Menu />
                <Secao texto="Pagina Inicial">
                    <div estilo="card-grid">
                        <Painel texto="Mural de Avisos" itens={["Inscrições para Cursos de Extensão", "Evento Maratona de Programação", "Palestra sobre Inteligência Artificial"]} />
                        <Painel texto="Agenda Acadêmica" itens={["Semana de Provas P1", "Entrega de Trabalhos", "Apresentação de TCC"]} />
                        <Painel texto="Histórico de Notas" itens={["Construção de Front-End - 9,5", "Manutenção de Software - 7,8", "Business Inteligence e DW - 8,3"]} />
                        <Painel texto="Histórico de Faltas" itens={["Construção de Front-End - 0", "Manutenção de Software - 0", "Business Inteligence e DW - 0"]} />
                    </div>
                </Secao>
            </Conteudo>
        </>
    );
}

export default Home;