import { Card_Resume } from "../../Cards/Card-Resume";
import { Container_Resume } from "./styled";

export const Resume = () => {
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
          <Card_Resume
            empresa={"Stack X - DEV FULL STACK JR"}
            ano_inicio={`Dezembro de 2021`}
            ano_atual={""}
            descricao={`Curso de Programação online Full Stack Jr, que te ensina desde o basico ao avançado, nas tecnologias que estao mais engajadas no mercado.`}
          />
          <Card_Resume
            empresa={"Dev Quest"}
            ano_inicio={`Março de 2022`}
            ano_atual={""}
            descricao={`O DevQuest é um treinamento web full stack que te leva do zero até sua primera vaga na área de programação em até 7 meses.`}
          />
        </div>
      </section>
    </Container_Resume>
  );
};
