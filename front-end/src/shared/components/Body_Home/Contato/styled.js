import styled from "styled-components";

export const Container_Contato = styled.section`
  width: 100%;
  padding: 2rem;

  .form-info {
    display: flex;
    gap: 1rem;

    .form {
      width: 50%;
      height: 300px;
    }
    .info {
      display: flex;
      flex-wrap: wrap;
      width: 50%;
      height: 50%;
      gap: 10px;
      height: 300px;

      .cartao_link {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #363547;

        width: 45%;
        height: 50%;

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 0.8rem;

        &:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          color: #000000;
        }
      }
    }
  }
`;
