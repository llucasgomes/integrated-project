import { useState } from "react";
import { Tabela } from "../../Tabelas";
import { Container_Experincia } from "./styled";
import { Modal_Experiencia } from "../../Modals/Modal-Experiencia";

export const Experiencia = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container_Experincia>
      <h2 className="title">Experiencias</h2>
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
      {modalOpen && <Modal_Experiencia setOpenModal={setModalOpen} />}
    </Container_Experincia>
  );
};
