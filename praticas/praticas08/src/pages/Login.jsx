import Conteudo from "../components/Conteudo";
import Rodape from "../components/Rodape";
import FormLogin from "./FormLogin";

function Login() {
    return (
      <>
        <main className="login-container">
        <Conteudo>
            <h1>Aluno Online</h1>
            <FormLogin />
        </Conteudo>
        <Rodape />
        </main>
      </>
    );
  }
  
  export default Login;