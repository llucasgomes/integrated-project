import { Tabela } from "../../Tabelas";
import { Container_Projects } from "./styled";

export const Projects = () => {
  return (
    <Container_Projects>
      <h2 className="title">Projects</h2>
      <div>
        <button>adicionar</button>
      </div>
      <Tabela
        titles={[
          "ID",
          "Instituição",
          "Inicio",
          "Termino",
          "Descrição",
          "Botoes",
          "Botoes",
        ]}
      />
    </Container_Projects>
  );
};
