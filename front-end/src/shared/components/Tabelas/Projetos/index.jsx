import { Pencil, Trash } from "phosphor-react";
import { Container_Tabela } from "./styled";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../contexts/DataContext";
import { API } from "../../../services/api";

export const Table_Projetos = ({ titles }) => {
  const { projects, setIsFetching } = useContext(DataContext);

  function handleDelete(id) {
    API.delete(`/project/${id}`)
      .then((res) => setIsFetching(true))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <Container_Tabela>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
          <th>Botoes</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img
                  src={`data:image/png;base64,${item.image}`}
                  alt="imagem"
                  className="image"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description.slice(0, 64) + "..."}</td>
              <td>
                <p>{item.github}</p>
                <p>{item.page}</p>
              </td>
              <td className="btn">
                <button onClick={() => alert("editar")} className="editar">
                  <Pencil size={16} weight="light" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="excluir"
                >
                  <Trash size={16} weight="light" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Container_Tabela>
  );
};
