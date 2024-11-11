import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from './pages/Login';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/perfil/:id' element={<Perfil />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;