import { Carrosel_Habilidades } from "../Carousel-Skills";
import { Container_About } from "./styled";

export const About = () => {
  return (
    <Container_About>
      <h2 className="titulo-contact">Web Developer Full Stack</h2>
      <h1 className="titulo">Lucas da Silva Gomes</h1>
      <p className="texto primary">
        Sou Desenvolvedor Web em busca da primeira oportunidade na área desde
        que comecei a estudar desenvolvimento, meu foco é no Front-End. Venho
        aprimorando meus conhecimentos em <strong>HTML</strong>,
        <strong> CSS</strong> e <strong> JAVASCRIPT</strong>, e sou aluno em{" "}
        <strong>Desenvolvimento Full Stack Jr</strong>.
      </p>
      <br />
      <br />
      <p className="texto">
        Estou em uma transição de carreira para a <strong>área tech</strong>,
        preferencialmente no desenvolvimento de sistemas front-end, na qual
        tenho desejo de atuar profissionalmente. Cada dia fica mais
        estuasiasmante por cada conhecimento que venho adquirindo nessa nova
        trajetoria profissional.
      </p>
      {/* <Carrosel_Habilidades /> */}
    </Container_About>
  );
};
