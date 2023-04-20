import { NavLink } from "react-router-dom";
import icon from "./pokemongo_icon.png";

function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav className="header">
        <ul className="nav-links">
          <div className="poke-icon">
            <img src={icon} alt="" />
          </div>
          <li>
            <NavLink className={setActiveClass} end to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={setActiveClass} end to="/pokemones">
              Pokemones
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
