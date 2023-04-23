import { Tabela } from "../../Tabelas";
import { Container_Habilidades } from "./styled";

export const Habilidades = () => {
  return (
    <Container_Habilidades>
      <h2 className="title">Habilidades</h2>
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
    </Container_Habilidades>
  );
};
