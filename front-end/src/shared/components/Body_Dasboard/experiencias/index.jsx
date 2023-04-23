import { Tabela } from "../../Tabelas";
import { Container_Experincia } from "./styled";

export const Experiencia = () => {
  return (
    <Container_Experincia>
      <h2 className="title">Experiencias</h2>
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
    </Container_Experincia>
  );
};
