import styled from "styled-components";

export const Container_Tabela = styled.table`
  width: 90%;
  height: auto;
  border: 0.1rem solid #aaaaaa;
  border-collapse: collapse;
  font-size: 1rem;
  margin: 3rem auto;

  @media (max-width: 900px) {
    width: 90%;
    margin: 1rem auto;
  }

  thead {
    tr {
      height: 2rem;
      th {
        border: 0.1rem solid #aaaaaa;
        text-align: center;
      }
    }
  }
  tbody {
    tr {
      height: 3rem;
      td {
        border: 0.1rem solid #aaaaaa;
        padding: 0 1rem;
        text-align: center;
        font-weight: 300;
        .image {
          width: 5rem;
        }
      }

      .btn {
        .editar {
          margin-right: 5px;
          border: none;
        }
        .excluir {
          margin-left: 5px;
        }
      }
    }
  }
`;
