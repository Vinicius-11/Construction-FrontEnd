import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import Error404 from "./pages/Erro404";
import Leiaute from './pages/Leiaute';

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route element={<Leiaute />} >
            <Route path="/perfil/:id" element={<Perfil />} />
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;