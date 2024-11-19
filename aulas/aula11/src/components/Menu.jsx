import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function Menu() {
  const navigate = useNavigate();

  const { usuario, logout } = useContext(AuthContext);

  const onSair = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuario.id}`}>Perfil</NavLink>
        </li>
        {usuario.perfil === "admin" && (
          <li>
            <NavLink to="/admin">Administração</NavLink>
          </li>
        )}
        <li>
          <NavLink onClick={onSair}>Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
