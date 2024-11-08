import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const { login, msg } = useContext(AuthContext);

  return (
    <>
      <h1>Login</h1>
      {msg && <p>{msg}</p>}
      <button onClick={(e) => login({ email: "jose@iesb.br", senha: "abcd1234" })}>Entrar</button>
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;