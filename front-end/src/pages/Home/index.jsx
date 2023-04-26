import { Profile_Section } from "../../shared/components/Profile";
import { Container_Home } from "./styled";
import { Navbar } from "../../shared/components/Navbar";
import { Conteudo } from "../../shared/components/Body_Home/index.jsx";

export const Home = () => {
  return (
    <Container_Home>
      {/* Seção da Esquerda */}
      <Profile_Section />

      {/* Seção da Direita */}
      <div className="container">
        <>
          <Navbar />
          <Conteudo />
        </>
      </div>
    </Container_Home>
  );
};
