import { useContext } from "react";
import { Card_Resume } from "../../Cards/Card-Resume";
import { Container_Resume } from "./styled";
import { DataContext } from "../../../contexts/DataContext";

export const Resume = () => {
  const { education } = useContext(DataContext);
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
          <Card_Resume
            empresa={"Stack X - MONITOR FRONT-END "}
            ano_inicio={`Abril de 2022`}
            ano_atual={""}
            descricao={`Auxilio os Mentores e Professores a retirar as duvidas dos alunos após as aulas, ajudo a criar exercicios basicos de front-end para os novos alunos`}
          />
        </div>
        <div className="container-rigth">
          <h2 className="sub_title">Educação</h2>
          {education.map((item) => (
            <Card_Resume
              empresa={item.course}
              ano_inicio={item.start_date}
              ano_atual={item.end_date}
              descricao={item.description}
            />
          ))}
        </div>
      </section>
    </Container_Resume>
  );
};
