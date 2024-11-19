import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/Login";
import Erro404 from "./pages/Erro404";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import Registrar from "./pages/Registrar";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { usuario } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        {usuario.logado ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
          </>
        )}
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
