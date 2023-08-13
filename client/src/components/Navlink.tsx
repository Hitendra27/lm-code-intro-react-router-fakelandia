import { NavLink } from "react-router-dom";

const Navlink: React.FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>

      <li>
        <NavLink to="/misdameanour"> Misdemeanours </NavLink>
      </li>

      <li>
        <NavLink to="/confession"> Confesss To Us </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navlink;
