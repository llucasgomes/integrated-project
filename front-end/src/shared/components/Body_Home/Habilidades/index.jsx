import { useContext } from "react";
import { Card_Skill } from "../../Cards/Card-Skill";
import { Container_Habilidade } from "./styled";
import { DataContext } from "../../../contexts/DataContext";

export const Habilidades = () => {
  const { skills } = useContext(DataContext);
  return (
    <Container_Habilidade>
      <h1 className="title">Habilidades</h1>
      <h2 className="sub-title">
        Essas são as principais habilidades e tecnologias que auxiliam em meu
        desempenho no dia a dia de desenvolvedor web.
      </h2>
      <section className="container-skills">
        {skills.map((item) => (
          <Card_Skill
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </Container_Habilidade>
  );
};
