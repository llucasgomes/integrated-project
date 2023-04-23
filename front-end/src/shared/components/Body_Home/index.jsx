import { Route, Routes } from "react-router-dom";
import { Container_Contente } from "./styled";
import { Resume } from "./Resume";
import { Habilidades } from "./Habilidades";
import { Portifolio } from "./Portifolio";
import { Sobre } from "./Sobre";
import { Contato } from "./Contato";

export const Contente = () => {
  return (
    <Container_Contente>
      <Routes>
        <Route path={"/"} element={<Resume />} />
        <Route path={"/portifolio"} element={<Portifolio />} />
        <Route path={"/habilidades"} element={<Habilidades />} />
        <Route path={"/sobre"} element={<Sobre />} />
        <Route path={"/contato"} element={<Contato />} />
      </Routes>
    </Container_Contente>
  );
};
