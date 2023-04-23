import styled from "styled-components";

export const Container_Sobre = styled.div`
  @font-face {
    font-family: "Amsterdam";
    src: url("src/assets/fonts/Amsterdam.ttf"),
      url("src/assets/fonts/Amsterdam.ttf");
  }

  width: 100%;
  padding: 2rem;

  p:nth-child(1)::first-letter {
    font-size: 1.5rem;
    font-family: "Amsterdam", Helvetica, sans-serif;
  }
  .texto {
    font-size: 1.5rem;
    margin: auto;
  }
  .assinatura {
    font-family: "Amsterdam", Helvetica, sans-serif;
    font-size: 2.8rem;
    text-align: end;
    margin-top: 2rem;
    padding: 2rem;
  }
`;
