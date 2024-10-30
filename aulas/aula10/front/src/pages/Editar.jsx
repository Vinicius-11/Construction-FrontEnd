import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "./Formulario";
import { atualizarContato, obterContato } from "../service/ContatoService";

function Editar() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [contato, setContato] = useState({});
    const [erro, setErro] = useState();

    const carregar = async () => {
        const resultado = await obterContato(id);
        if (resultado.sucesso) {
            setContato(resultado.dados);
            setErro("");
        }else {
            setErro(resultado.mensagem);
        }
    }

    const onSalvar = async(data) => {
        const resultado = await atualizarContato({id, ...data});
        if (resultado.sucesso) {
            setErro("");
            navigate("/");

        }else {
            setErro(resultado.mensagem)
        }
    }

    useEffect(() => {
        carregar();
    }, []);

    return (
        <>
            <Cabecalho />
            <Conteudo>
                {erro && <p>{erro}</p>}
                <h2>Editar Contato</h2>
                <Formulario dados={contato} trataEnviar={onSalvar} />
            </Conteudo>
        </>
    );
}

export default Editar;