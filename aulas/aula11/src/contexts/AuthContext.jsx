import { createContext, useState } from "react";
import { autenticar, cadastrar } from "../services/AuthService";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    email: "",
    perfil: "",
    logado: false,
  });

  const [ msg, setMsg ] = useState("");

  const login = async (dados) => {
    const resposta = await autenticar(dados);
    if(resposta.sucesso) {
      setUsuario({ email: dados.email, perfil: "aluno", logado: true });
    } else  {
      setMsg(resposta.msg);
    }
  };

  const logout = () => {
    setUsuario({ email: "", perfil: "", logado: false });
  };

  const registrar = async (dados) => {
    const resposta = await cadastrar(dados);
    if (resposta.sucesso) {
      setUsuario({ email: dados.email, perfil: "aluno", logado: true });
    } else {
      setMsg(resposta.msg);
    }
  }

  const contexto = {
    usuario,
    msg,
    login,
    logout,
    registrar
  };

  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider}