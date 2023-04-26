import { useState } from "react";
import { Tabela } from "../../Tabelas";
import { Container_Projects } from "./styled";
import { Modal_Projetos } from "../../Modals/Modal-Projetos";

export const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container_Projects>
      <h2 className="title">Projects</h2>
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
      {modalOpen && <Modal_Projetos setOpenModal={setModalOpen} />}
    </Container_Projects>
  );
};
