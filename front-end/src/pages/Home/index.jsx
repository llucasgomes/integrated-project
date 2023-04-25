import { Profile_Section } from "../../shared/components/Profile";
import { Container_Home } from "./styled";
import { Navbar } from "../../shared/components/Navbar";
import { Contente } from "../../shared/components/Body_Home";

export const Home = () => {
  return (
    <Container_Home>
      {/* Seção da Esquerda */}
      <Profile_Section />

      {/* Seção da Direita */}
      <div className="container">
        <Navbar />
        <Contente />
      </div>
    </Container_Home>
  );
};
