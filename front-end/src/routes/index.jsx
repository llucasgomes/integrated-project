import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../shared/components/Navbar";
import { Contente } from "../shared/components/Body_Home";
import { Home, Page_Dashboard, Page_Login, Page_Register } from "../pages";
import { Resume } from "../shared/components/Body_Home/Resume";
import { Portifolio } from "../shared/components/Body_Home/Portifolio";
import { Habilidades } from "../shared/components/Body_Home/Habilidades";
import { Sobre } from "../shared/components/Body_Home/Sobre";
import { Sidebar } from "../shared/components/Sidebar";
import { Body_Dashboard } from "../shared/components/Body_Dasboard";

export const Rotas_Home = () => {
  return (
    <>
      <Navbar />
      <Contente />
    </>
  );
};

export const Rotas_Dasboard = () => {
  return (
    <>
      <Sidebar />
      <Body_Dashboard />
    </>
  );
};

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path={"*"} element={<Resume />} />
          <Route path={"/portifolio"} element={<Portifolio />} />
          <Route path={"/habilidades"} element={<Habilidades />} />
          <Route path={"/sobre"} element={<Sobre />} />
          <Route path={"/contato"} element={<Sobre />} />
        </Route>
        <Route path={"/login"} element={<Page_Login />} />
        <Route path={"/register"} element={<Page_Register />} />
        <Route path={"/dashboard"} element={<Page_Dashboard />}>
          <Route path={"/dashboard"} element={"incial"} />
          <Route path={"/dashboard/perfil"} element={"Perfil"} />
          <Route path={"/dashboard/experiencias"} element={"expericcias"} />
          <Route path={"/dashboard/educacao"} element={"educação"} />
          <Route path={"/dashboard/projetos"} element={"projetos"} />
          <Route path={"/dashboard/habilidades"} element={"Skills"} />
          <Route path={"/dashboard/comentarios"} element={"comentarios"} />
          <Route path={"/dashboard/sobre"} element={"Sobre"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
