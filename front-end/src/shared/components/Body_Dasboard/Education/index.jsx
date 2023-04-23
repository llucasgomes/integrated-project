import { Tabela } from "../../Tabelas";
import { Container_Education } from "./styled";

export const Education = () => {
  return (
    <Container_Education>
      <h2 className="title">Educação</h2>
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
    </Container_Education>
  );
};
