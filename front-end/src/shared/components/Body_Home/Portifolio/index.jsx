import { Card_Project } from "../../Cards/Card-Project";
import { Container_Portifolio } from "./styled";

export const Portifolio = () => {
  return (
    <Container_Portifolio>
      <h1 className="title">Projetos</h1>
      <h2 className="sub-title">
        Essas são as principais projetos, podendo conferir todos meus
        repositorios e projetos no GitHub.
      </h2>
      <section className="container-skills">
        <Card_Project />
        <Card_Project />
        <Card_Project />
        <Card_Project />
        <Card_Project />
      </section>
    </Container_Portifolio>
  );
};
