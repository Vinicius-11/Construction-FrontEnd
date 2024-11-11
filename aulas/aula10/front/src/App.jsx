import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { UseForm } from 'react-hook-form';
import Listar from "./pages/Listar";
import Novo from "./pages/Novo";
import Editar from "./pages/Editar";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Listar /> }/>
            <Route path="/novo" element={<Novo />} />
            <Route path="/editar/:id" element={<Editar />} />
          </Routes>
        </BrowserRouter>        
      </>
  );
}

export default App;