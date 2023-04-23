import { Route, Routes } from "react-router-dom";
import { Container_Body_Dashboard } from "./styled";
import { D_Perfil } from "./perfil";
import { Bem_Vindo } from "./BoasVindas";
import { Experiencia } from "./experiencias";
import { Education } from "./Education";
import { Projects } from "./Projetos";
import { Habilidades } from "./Habilidades";
import { Comments } from "./Comments";

export const Body_Dashboard = () => {
  return (
    <Container_Body_Dashboard>
      <Routes>
        <Route path={"/"} element={<Bem_Vindo />} />
        <Route path={"/perfil"} element={<D_Perfil />} />
        <Route path={"/experiencias"} element={<Experiencia />} />
        <Route path={"/educacao"} element={<Education />} />
        <Route path={"/projetos"} element={<Projects />} />
        <Route path={"/habilidades"} element={<Habilidades />} />
        <Route path={"/comentarios"} element={<Comments />} />
        <Route path={"/sobre"} element={"Sobre"} />
      </Routes>
    </Container_Body_Dashboard>
  );
};
