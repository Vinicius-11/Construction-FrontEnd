import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Menu from "../components/Menu";

function Home() {
  const { usuario } = useContext(AuthContext)

  return (
    <>    
      <Menu />
      <h1>Home</h1>
      <p>Olá {usuario.email}!</p>
    </>
  );
}

export default Home;