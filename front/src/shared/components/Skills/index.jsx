import { Card_Skill } from "../Cards/card-skill";
import { Container_Habilidades } from "./styled";

export const Habilidades = () => {
  return (
    <Container_Habilidades>
      <h1>Habilidade</h1>
      <h2>
        Essas são as principais habilidades e tecnologias que auxiliam em meu
        desempenho no dia a dia de desenvolvedor web.
      </h2>
      <div className="container-skills">
        <Card_Skill />
        <Card_Skill />
        <Card_Skill />
        <Card_Skill />
      </div>
    </Container_Habilidades>
  );
};
