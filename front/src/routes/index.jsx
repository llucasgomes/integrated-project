import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "../shared/components/SideBar";
import { Resume } from "../shared/components/Resume";
import { Habilidades } from "../shared/components/Skills";
import { Projetos } from "../shared/components/Projects";

export const Rotas_Portifolio = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
    </BrowserRouter>
  );
};
