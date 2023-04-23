import styled from "styled-components";

export const Container_Profile = styled.section`
  background-color: #ffffff;
  width: 19rem;
  height: 40rem;
  /* height: 40rem; */
  padding: 1rem 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  transition: 0.3s;

  &&:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Titulo e Subtitulo */
  .titulo-subtitulo {
    width: 100%;
    padding: 0 2rem;

    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1rem;
    }
  }

  /* Foto de Perfil */
  .image {
    width: 100%;
    .foto-perfil {
      width: 100%;
      clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
    }
  }

  /* Informações Basicas */
  .info {
    width: 100%;
    padding: 1rem 2rem;

    p {
      font-size: 0.9rem;
    }
  }

  /* Baixar o curriculo em PDF */
  .download-cv {
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Botao de baixar CV */
    .myButton {
      box-shadow: 0 1rem 1.4rem -0.7px #276873;
      background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
      background-color: #599bb3;
      border-radius: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      font-size: 1rem;
      font-weight: bold;
      padding: 0.9rem 2.2rem;
      text-decoration: none;
      text-shadow: 0 0.1rem 0 #3d768a;

      gap: 1rem;
    }
    .myButton:hover {
      background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
      background-color: #408c99;
    }
  }
`;
