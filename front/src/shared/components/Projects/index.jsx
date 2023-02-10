import { Card_Project } from "../Cards/card-project";
import { Container_Projetos } from "./styled";

export const Projetos = () => {
  return (
    <Container_Projetos>
      <h1>Projetos</h1>
      <h2>
        Essas são as principais projetos, podendo conferir todos meus
        repositorios e projetos no GitHub
      </h2>
      <div className="projetos-grid">
        <Card_Project />
        <Card_Project />
        <Card_Project />
        <Card_Project />
        <Card_Project />
      </div>
    </Container_Projetos>
  );
};
