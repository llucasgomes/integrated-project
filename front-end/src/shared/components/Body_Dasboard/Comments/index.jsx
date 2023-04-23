import { Tabela } from "../../Tabelas";
import { Container_Comments } from "./styled";

export const Comments = () => {
  return (
    <Container_Comments>
      <h2 className="title">COMENTARIOS</h2>
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
    </Container_Comments>
  );
};
