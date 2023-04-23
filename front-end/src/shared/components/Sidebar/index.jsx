import { Container_Sidebar } from "./styled";
import Foto from "../../../assets/images/foto_perfil.png";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <Container_Sidebar>
      <img className="foto-perfil" src={Foto} alt="Foto de Perfil" />
      <ul className="list">
        <Link to={"/dashboard/perfil"} className="list_item">
          Perfil
        </Link>
        <Link to={"/dashboard/experiencias"} className="list_item">
          Experiencias
        </Link>
        <Link to={"/dashboard/educacao"} className="list_item">
          Educação
        </Link>
        <Link to={"/dashboard/projetos"} className="list_item">
          Projetos
        </Link>
        <Link to={"/dashboard/habilidades"} className="list_item">
          Habilidades
        </Link>
        <Link to={"/dashboard/comentarios"} className="list_item">
          Comentarios
        </Link>
        <Link to={"/dashboard/sobre"} className="list_item">
          Sobre
        </Link>
        <Link to={""} className="list_item">
          Sair
        </Link>
      </ul>
    </Container_Sidebar>
  );
};
