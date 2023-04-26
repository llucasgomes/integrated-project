import { Container_Sidebar } from "./styled";
import Foto from "../../../assets/images/foto_perfil.png";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  //Funcao para deslogar
  const handleGetOut = (rota) => {
    confirm("Deseja mesmo sair Chefe?") ? navigate("/") : alert("Nao saiu");
  };

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
        <Link to={"/dashboard/skills"} className="list_item">
          Habilidades
        </Link>
        <Link to={"/dashboard/comentarios"} className="list_item">
          Comentarios
        </Link>
        <a onClick={() => handleGetOut("/")} className="list_item">
          Sair
        </a>
      </ul>
    </Container_Sidebar>
  );
};
