import { Profile_Section } from "../../shared/components/Profile";
import { Container_Home } from "./styled";
import { Rotas_Home } from "../../routes";

export const Home = () => {
  return (
    <Container_Home>
      {/* Seção da Esquerda */}
      <Profile_Section />

      {/* Seção da Direita */}
      <div className="container">
        <Rotas_Home />
      </div>
    </Container_Home>
  );
};
