import { Pencil, Trash } from "phosphor-react";
import { Container_Tabela } from "./styled";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import { API } from "../../../services/api";

export const Table_Education = ({ titles, isFetching }) => {
  const { education, setIsFetching } = useContext(DataContext);

  function handleDelete(id) {
    API.delete(`/education/${id}`)
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
        {console.log(education)}
        {education.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.course}</td>
              <td>{item.start_date.slice(0, 10)}</td>
              <td>{item.end_date.slice(0, 10)}</td>
              <td>
                {item.description.lenth <= 60
                  ? item.description
                  : `${item.description.slice(0, 57)}...`}
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
