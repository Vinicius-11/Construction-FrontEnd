import { createContext, useState } from "react";
import { autenticar, cadastrar, alterar } from "../services/AuthService";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    email: "",
    perfil: "",
    logado: false,
  });

  const login = async (dados) => {
    const resposta = await autenticar(dados);
    if (resposta.sucesso) {
      setUsuario({
        id: resposta.dados.user.id,
        token: resposta.dados.accessToken,
        email: dados.email,
        perfil: "aluno",
        logado: true,
      });
    } else {
      return resposta.msg;
    }
    return "";
  };

  const logout = async () => {
    setUsuario({ email: "", perfil: "", logado: false });
  };

  const registrar = async (dados) => {
    const resposta = await cadastrar(dados);
    if (resposta.sucesso) {
      setUsuario({ email: dados.email, perfil: "aluno", logado: true });
    } else {
      return resposta.msg;
    }
    return "";
  };

  const atualizar = async (dados) => {
    const resposta = await alterar(dados)
    if (resposta.sucesso) {
      setUsuario({ email: dados.email, perfil: "aluno", logado: true });
    } else {
      return resposta.msg;
    }
    return "";
  }

  const contexto = {
    usuario,
    login,
    logout,
    registrar,
    atualizar,
  };

  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
