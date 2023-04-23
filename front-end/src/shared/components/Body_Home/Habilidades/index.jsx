import { Card_Skill } from "../../Cards/Card-Skill";
import { Container_Habilidade } from "./styled";

export const Habilidades = () => {
  return (
    <Container_Habilidade>
      <h1 className="title">Habilidades</h1>
      <h2 className="sub-title">
        Essas são as principais habilidades e tecnologias que auxiliam em meu
        desempenho no dia a dia de desenvolvedor web.
      </h2>
      <section className="container-skills">
        <Card_Skill />
        <Card_Skill />
        <Card_Skill />
        <Card_Skill />
        <Card_Skill />
      </section>
    </Container_Habilidade>
  );
};
