import { Container_Profile } from "./styled";
import Foto from "../../../assets/images/foto_perfil.png";
import { FileArrowDown } from "phosphor-react";

export const Profile_Section = () => {
  return (
    <Container_Profile>
      {/* Titulo de SubTitulo */}
      <div className="titulo-subtitulo">
        <h2>Lucas Gomes</h2>
        <h3>Developer Full Stack</h3>
      </div>
      {/* Foto de Perfil */}
      <div className="image">
        <img className="foto-perfil" src={Foto} alt="Foto de Perfil" />
      </div>
      {/* Informações Basicas */}
      <div className="info">
        <p>
          <strong>Name:</strong> Lucas da Silva
        </p>
        <p>
          <strong>Birthday:</strong> 15 December 1989
        </p>
        <p>
          <strong>Job:</strong> CLT
        </p>

        <p>
          <strong>Email:</strong> llucas.gomes.dev@gmail.com
        </p>
        <p>
          <strong>Phone:</strong>(92) 988471665{" "}
        </p>
      </div>
      {/* Baixar o curriculo em PDF */}
      <div className="download-cv">
        <button className="myButton">
          <p>Baixar</p>
          <FileArrowDown size={24} weight="bold" />
        </button>
      </div>
    </Container_Profile>
  );
};
