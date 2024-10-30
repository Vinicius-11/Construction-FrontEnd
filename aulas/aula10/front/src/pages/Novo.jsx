import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";
import { criarContato } from "../service/ContatoService";

function Novo() {
  const [erro, setErro] = useState();

  const navigate = useNavigate();

  const onSalvar = async (data) => {
    const resposta = await criarContato(data);
    if (resposta.sucesso) {
      setErro("");-
      navigate("/");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <>
      <Cabecalho />
      <Conteudo>
        {erro && <p>{erro}</p>}
        <h2>Novo Contato</h2>
        <Formulario dados={{}} trataEnviar={onSalvar} />
      </Conteudo>
    </>
  );
}

export default Novo;
