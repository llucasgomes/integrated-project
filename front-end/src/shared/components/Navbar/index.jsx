import { Link } from "react-router-dom";
import { Container_Navbar } from "./styled";
import { House, SignIn } from "phosphor-react";

export const Navbar = () => {
  return (
    <Container_Navbar>
      <div className="btn-home">
        <House size={34} weight="bold" color="white" />
      </div>
      <div className="navegation">
        <ul>
          <Link className="link" to={"/"}>
            RESUME
          </Link>
          <Link className="link" to={"portifolio"}>
            PORTIFOLIO
          </Link>
          <Link className="link" to={"habilidades"}>
            HABILIDADES
          </Link>
          <Link className="link" to={"contato"}>
            COMENTARIOS
          </Link>
          {/* <Link className="link" to={"sobre"}>
            SOBRE
          </Link> */}
          <Link className="link" to={"contato"}>
            CONTATO
          </Link>
        </ul>
      </div>
      <div className="btn-login">
        <Link to={"login"}>
          <SignIn size={34} weight="bold" />
        </Link>
      </div>
    </Container_Navbar>
  );
};
