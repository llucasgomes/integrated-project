import {
  BookBookmark,
  Bookmark,
  CircleWavyQuestion,
  House,
} from "phosphor-react";
import { Container_Sidebar } from "./styled";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <Container_Sidebar>
      <img
        className="img-perfil"
        src="https://avatars.githubusercontent.com/u/96358624?v=4"
        alt="Foto Perfil"
      />
      <h1 className="titulo">Lucas da Silva</h1>

      <ul className="menu">
        <Link to={"/"}>
          <li className="menu-item">
            <House size={24} color="#E8E8E8" weight="regular" />
            <label htmlFor="">Resumo</label>
          </li>
        </Link>
        <Link to={"/habilidades"}>
          <li className="menu-item">
            <BookBookmark size={24} color="#E8E8E8" weight="regular" />
            <label htmlFor="">Habilidades</label>
          </li>
        </Link>
        <Link to={"/projetos"}>
          <li className="menu-item">
            <Bookmark size={24} color="#E8E8E8" weight="regular" />
            <label htmlFor="">Projetos</label>
          </li>
        </Link>
        <li className="menu-item">
          <CircleWavyQuestion size={24} color="#E8E8E8" weight="regular" />
          <label htmlFor="">Sobre</label>
        </li>
      </ul>
    </Container_Sidebar>
  );
};
