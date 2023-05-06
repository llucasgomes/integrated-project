import { useState } from "react";
import { Tabela } from "../../Tabelas";
import { Container_Experincia } from "./styled";
import { Modal_Experiencia } from "../../Modals/Modal-Experiencia";
import { Table_Experience } from "../../Tabelas/Experience";

export const Experiencia = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container_Experincia>
      <h2 className="title">Experiências</h2>
      <div>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          adicionar
        </button>
      </div>
      <Table_Experience
        titles={["ID", "Empresa", "Cargo", "Inicio", "Termino", "Descrição"]}
      />
      {modalOpen && <Modal_Experiencia setOpenModal={setModalOpen} />}
    </Container_Experincia>
  );
};
