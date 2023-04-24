import { useState } from "react";
import { Tabela } from "../../Tabelas";
import { Container_Education } from "./styled";
import { Modal_Educacao } from "../../Modals/Modal-Educacao";

export const Education = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Container_Education>
      <h2 className="title">Educação</h2>
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
      {modalOpen && <Modal_Educacao setOpenModal={setModalOpen} />}
    </Container_Education>
  );
};
