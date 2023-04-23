import styled from "styled-components";

export const Container_Navbar = styled.header`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  height: 5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 0.8rem;

  &&:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Botão de Home */
  .btn-home {
    width: 4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.8rem 0 0 0.8rem;
    cursor: pointer;
    background: #4c729a;

    &:hover {
      background: #4c7291;
    }
  }

  /* Menu de Navegação */
  .navegation {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;

      .link {
        font-weight: 500;
        display: block;
        margin: 0 1rem;
        font-size: 0.8rem;
        cursor: pointer;
        &:hover {
          color: #4c729a;
        }
      }
    }
  }

  /* Botao de Login */
  .btn-login {
    width: 5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0.8rem 0.8rem 0;
    cursor: pointer;
  }
`;
