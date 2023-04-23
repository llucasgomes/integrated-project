import { Pencil, Trash } from "phosphor-react";
import { Container_Tabela } from "./styled";

export const Tabela = ({ titles }) => {
  return (
    <Container_Tabela>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>DevQuest</td>
          <td>Front-End</td>
          <td>15/04/2021</td>
          <td>Atual</td>
          <td>Desenvolvimento We...</td>
          <td>
            <button onClick={() => alert("editar")}>
              <Pencil size={16} weight="light" />
            </button>
            <button>
              <Trash size={16} weight="light" />
            </button>
          </td>
        </tr>
        <tr>
          <td>02</td>
          <td>Stack X</td>
          <td>FullStack</td>
          <td>15/12/2019</td>
          <td>Atual</td>
          <td>Desenvolvimento We...</td>
          <td>
            <button onClick={() => alert("editar")}>
              <Pencil size={16} weight="light" />
            </button>
            <button>
              <Trash size={16} weight="light" />
            </button>
          </td>
        </tr>

        {/* {users.map((user: any) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{parseISO(user.birthDate).toLocaleDateString()}</td>
            <td>{user.address}</td>
          </tr>
        ))} */}
      </tbody>
    </Container_Tabela>
  );
};
