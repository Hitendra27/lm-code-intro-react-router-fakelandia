import Confessions from "./Confessions";
import Home from "./Home";
import { Layout } from "./Layout";
import Misdemeanour from "./Misdemeanour";
import { NotFound } from "./Not_Found";
import { Route, Routes } from "react-router-dom";

const Router = () => (
  <Routes>
    <Route path="/" element={Layout />}>
      <Route index element={<Home />} />
      <Route path="misdemeanour" element={<Misdemeanour />} />
      <Route path="confession" element={<Confessions />} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  </Routes>
);

export default Router;