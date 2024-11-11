import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Formulario from "./Formulario";

function Login() {
  const { login, msg } = useContext(AuthContext);

  const onEnviar = async (data) => {
    login(data);
  };

  return (
    <>
      <h1>Login</h1>
      {msg && <p>{msg}</p>}
      <Formulario onEnviar={onEnviar} />
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;
