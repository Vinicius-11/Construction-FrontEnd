import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Listagem from "./Listagem";
import { carregarContatos, removerContato } from "../service/ContatoService";

function Listar() {
  const [contatos, setContatos] = useState([]);
  const [erro, setErro] = useState();

    const navigate = useNavigate();

  const onEditar = (id) => {
    navigate(`/editar/${id}`);
  }

    const onRemover = async (id) => {
        const resultado = await removerContato(id);
        if (resultado.sucesso) {
            await carregar();
            setErro("");
        }else {
            setErro(resultado.mensagem);
        }
    }

  const carregar = async () => {
    const resultado = await carregarContatos();
    if (resultado.sucesso) {
      setContatos(resultado.dados);
    } else {
      setContatos([]);
      setErro(resultado.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <>
      <Cabecalho />
      <Conteudo>
        {erro && <p>{erro}</p>}
        <h2>Lista de Contatos</h2>
        <Listagem itens={contatos} onEditar={onEditar} onRemover={onRemover} />
      </Conteudo>
    </>
  );
}

export default Listar;
