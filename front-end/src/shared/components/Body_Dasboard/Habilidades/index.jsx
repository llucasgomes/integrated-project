import { useState } from "react";
import { Modal_Habilidades } from "../../Modals/Modal-Habilidades";
import { Container_Habilidades } from "./styled";
import { Table_Habilidade } from "../../Tabelas/Habilidades";

export const D_Habilidades = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

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
      <Table_Habilidade
        titles={["ID", "Imagem", "Title", "Descrição"]}
        isFetching={setIsFetching}
        setIsFetching={setIsFetching}
      />
      {modalOpen && (
        <Modal_Habilidades
          setOpenModal={setModalOpen}
          setIsFetching={setIsFetching}
        />
      )}
    </Container_Habilidades>
  );
};
