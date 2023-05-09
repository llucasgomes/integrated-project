import { useState } from "react";
import { Tabela } from "../../Tabelas";
import { Container_Experincia } from "./styled";
import { Modal_Experiencia } from "../../Modals/Modal-Experiencia";
import { Table_Experience } from "../../Tabelas/Experience";

export const Experiencia = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState("");

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
        modal={setModalOpen}
        setEditar={setEditar}
        searchID={setId}
      />
      {modalOpen && (
        <Modal_Experiencia
          setOpenModal={setModalOpen}
          editar={editar}
          setEditar={setEditar}
          id={id}
        />
      )}
    </Container_Experincia>
  );
};
