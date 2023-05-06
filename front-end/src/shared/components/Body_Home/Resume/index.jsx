import { useContext } from "react";
import { Card_Resume } from "../../Cards/Card-Resume";
import { Container_Resume } from "./styled";
import { DataContext } from "../../../contexts/DataContext";

export const Resume = () => {
  const { education, experience } = useContext(DataContext);
  return (
    <Container_Resume>
      <h1 className="title">Resumo</h1>
      <section className="descricao-breve">
        <p>
          Sempre foi minha paixão atuar na área tecnológica, estou em um período
          de transição de carreira, cursando Full Stack Jr e DevQuest.
        </p>
      </section>
      <section className="container-resume">
        <div className="container-left">
          <h2 className="sub_title">Experiência</h2>
          {experience.map((item) => (
            <Card_Resume
              empresa={item.company}
              cargo={item.office}
              ano_inicio={item.start_date.slice(3)}
              ano_atual={
                item.end_date == "Atual"
                  ? item.end_date
                  : item.end_date.slice(3)
              }
              descricao={item.description}
            />
          ))}
        </div>
        <div className="container-rigth">
          <h2 className="sub_title">Educação</h2>
          {education.map((item) => (
            <Card_Resume
              empresa={item.course}
              ano_inicio={item.start_date.slice(3)}
              ano_atual={
                item.end_date == "Atual"
                  ? item.end_date
                  : item.end_date.slice(3)
              }
              descricao={item.description}
            />
          ))}
        </div>
      </section>
    </Container_Resume>
  );
};
