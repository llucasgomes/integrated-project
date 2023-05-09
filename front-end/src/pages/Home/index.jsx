import { Profile_Section } from "../../shared/components/Profile";
import { Container_Home, Container_Loading } from "./styled";
import { Navbar } from "../../shared/components/Navbar";
import { Conteudo } from "../../shared/components/Body_Home/index.jsx";
import { DataContext } from "../../shared/contexts/DataContext";
import { useContext } from "react";

import ReactLoading from "react-loading";

export const Home = () => {
  const { isFetching } = useContext(DataContext);
  return (
    <Container_Home>
      {isFetching ? (
        <>
          <Container_Loading>
            <ReactLoading
              type={"spin"}
              color={"#7279f9"}
              height={100}
              width={100}
            />
          </Container_Loading>
        </>
      ) : (
        <>
          {/* Seção da Esquerda */}
          <Profile_Section />

          {/* Seção da Direita */}
          <div className="container">
            <>
              <Navbar />
              <Conteudo />
            </>
          </div>
        </>
      )}
    </Container_Home>
  );
};
