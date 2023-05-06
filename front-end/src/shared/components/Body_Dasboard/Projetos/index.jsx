import { useState } from "react";
import { Container_Projects } from "./styled";
import { Modal_Projetos } from "../../Modals/Modal-Projetos";
import { Table_Projetos } from "../../Tabelas/Projetos";

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
      <Table_Projetos
        titles={["ID", "Image", "Titulo", "Descricao","Links"]}
      />
      {modalOpen && <Modal_Projetos setOpenModal={setModalOpen} />}
    </Container_Projects>
  );
};
