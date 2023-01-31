import { Container_Experience } from "./styled";

export const Experience = () => {
  return (
    <Container_Experience>
      <h1 className="titulo">Work Experience</h1>
      <div className="container-empresa">
        <img
          src="https://raw.githubusercontent.com/llucasgomes/Site-Sushi/main/imagens/StackX.png"
          alt=""
        />
        <div className="desc-container">
          <h2 className="name-empresa texto">
            Stack X-Formação de Desenvolvedores de Software
          </h2>
          <h3 className="funcao texto">Monitor Voluntário Front-End</h3>
          <h3 className="date texto">Abr de 2022 - até o momento</h3>
          <ul className=" list texto ">
            <li>
              Ajudo os Mentores a retirar duvidas de Alunos, referente a HTML,
              CSS ou JavaScript;
            </li>
            <li>
              Auxilio os alunos a concluirem suas tarefas,desafios ou projetos
              praticos;
            </li>
            <li>Ajudo alunos com seus projetos.</li>
          </ul>
        </div>
      </div>
    </Container_Experience>
  );
};
