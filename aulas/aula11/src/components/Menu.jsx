import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

function Menu() {
  const { usuario } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">hOmE</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">PeRfIl</NavLink>
        </li>
        {usuario.perfil === "/admin" && (
          <li>
            <NavLink to="/admin">aDMInIStrAçãO</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/" onClick={() => {}}>
            sAiiiii
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;