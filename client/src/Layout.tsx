import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Confessions from "./components/Confessions";
import { NotFound } from "./components/Not_Found";
import Misdemeanour from "./components/Misdemeanour";

export const Layout: React.FC = () => <>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/misdemeanour">Misdemeanour</NavLink>
    </li>
    <li>
      <NavLink to="confessions">Confessions</NavLink>
    </li>
  </ul>
  <Routes>
    <Route path="/">
      <Route path="confessions" element={<Confessions />} />
      <Route path="misdemeanour" element={<Misdemeanour />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</>;
