import { Container_Profile } from "./styled";
import Foto from "../../../assets/images/foto_perfil.png";
import { FileArrowDown } from "phosphor-react";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { newData } from "../../functions";

export const Profile_Section = () => {
  const { profile } = useContext(DataContext);

  return (
    <Container_Profile>
      {/* Titulo de SubTitulo */}
      <div className="titulo-subtitulo">
        <h2>{`${profile[0].name} ${profile[0].last_name}`}</h2>
        <h3>Developer Full Stack</h3>
      </div>
      {/* Foto de Perfil */}
      <div className="image">
        <img
          className="foto-perfil"
          src={`data:image/png;base64,${profile[0].image}`}
          alt="Foto de Perfil"
        />
      </div>
      {/* Informações Basicas */}
      <div className="info">
        <p>
          <strong>Name:</strong>{" "}
          {`${profile[0].name} ${profile[0].middle_name} ${profile[0].last_name}`}
        </p>
        <p>
          <strong>Birthday: </strong>{" "}
          {` ${newData(profile[0].birthday.slice(0, 10))}`}
        </p>
        <p>
          <strong>Job: </strong> {profile[0].job}
        </p>

        <p>
          <strong>Email: </strong> {profile[0].email}
        </p>
        <p>
          <strong>Phone: </strong>
          {profile[0].phone}
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
