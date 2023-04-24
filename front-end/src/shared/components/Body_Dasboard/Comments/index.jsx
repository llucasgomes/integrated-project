import { useState } from "react";
import { Tabela } from "../../Tabelas";
import { Container_Comments } from "./styled";
import { Modal } from "../../Modals/Modal-Comentarios";

export const Comments = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container_Comments>
      <h2 className="title">COMENTARIOS</h2>
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
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </Container_Comments>
  );
};
