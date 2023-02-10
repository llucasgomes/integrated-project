import styled from "styled-components";

export const Container_About = styled.section`
  @font-face {
    font-family: "Amsterdam";
    src: url("src/assets/fonts/AmsterdamFour.ttf"),
      url("src/assets/fonts/Amsterdam.ttf");
  }

  padding: 3rem;
  font-family: var(--inter);

  min-height: 100vh;

  .titulo-contact {
    font-family: var(--inter);
    font-size: 2rem;
    margin: 2rem;
    cursor: pointer;
  }
  .titulo {
    font-family: var(--inter);
    font-size: 5rem;
    margin: 3rem;
  }

  .texto,
  strong {
    font-size: 2.4rem;
    margin: auto;
    line-height: 3.5rem;
    text-align: justify;
  }
  .texto.primary::first-letter {
    font-size: 2.8rem;
    font-family: "Amsterdam";
    font-weight: bold;
  }
`;
