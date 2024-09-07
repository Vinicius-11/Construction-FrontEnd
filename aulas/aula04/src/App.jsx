import Login from "./pages/login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

function App () {
  const index = 2; 

  return (
    <>
    {index == 1 && <Login />}
    {index == 2 && <Home />}
    {index == 3 && <Perfil />}
    </>
  );
}

export default App;