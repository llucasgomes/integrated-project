import { BrowserRouter } from "react-router-dom";
import { SideBar } from "../../shared/components/SideBar";
import { Body } from "../../shared/components/Resume";
import { Container_Portifolio } from "./styled";
import { Rotas_Portifolio } from "../../routes";

export const Portifolio = () => {
  return (
    <Container_Portifolio>
      <Rotas_Portifolio />

      {/* <SideBar />
            <BrowserRouter>
                <Body />

            </BrowserRouter> */}
    </Container_Portifolio>
  );
};
