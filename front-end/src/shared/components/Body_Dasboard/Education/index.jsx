import { useState } from "react";
import { Container_Education } from "./styled";
import { Modal_Educacao } from "../../Modals/Modal-Educacao";
import { Table_Education } from "../../Tabelas/Education";

export const Education = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editar, setEditar] = useState(false);
  const [id, setId] = useState("");

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
      <Table_Education
        titles={["ID", "Instituição", "Inicio", "Termino", "Descrição"]}
        modal={setModalOpen}
        setEditar={setEditar}
        searchID={setId}
      />
      {modalOpen && (
        <Modal_Educacao
          setOpenModal={setModalOpen}
          editar={editar}
          setEditar={setEditar}
          id={id}
        />
      )}
    </Container_Education>
  );
};
