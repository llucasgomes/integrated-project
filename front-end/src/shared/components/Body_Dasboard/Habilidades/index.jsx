import { useState } from "react";
import { Tabela } from "../../Tabelas";
import { Modal_Habilidades } from "../../Modals/Modal-Habilidades";
import { Container_Habilidades } from "./styled";

export const D_Habilidades = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container_Habilidades>
      <h2 className="title">Habilidades</h2>
      <div>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          adicionar
        </button>
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
      {modalOpen && <Modal_Habilidades setOpenModal={setModalOpen} />}
    </Container_Habilidades>
  );
};
