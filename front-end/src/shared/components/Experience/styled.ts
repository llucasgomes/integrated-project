import styled from "styled-components";

export const Container_Experience = styled.section`
  @font-face {
    font-family: "Amsterdam";
    src: url("src/assets/fonts/AmsterdamFour.ttf"),
      url("src/assets/fonts/Amsterdam.ttf");
  }

  padding: 3rem;
  font-family: var(--inter);

  .container-empresa {
    display: flex;
    object-fit: contain;
    img {
      width: 30rem;
      margin: 0 0 0 2rem;
    }
  }
  .titulo {
    font-family: var(--inter);
    font-size: 5rem;
    margin: 3rem;
  }
  .name-empresa.texto {
    font-size: 2.4rem;
  }
  .funcao.texto {
    font-size: 1.8rem;
  }
  .date.texto {
    font-size: 1.8rem;
    font-weight: 400;
  }
  .list.texto {
    font-size: 1.8rem;
    font-weight: 400;
    padding: 3rem;
    list-style: none;
  }
  .texto {
    font-size: 2.4rem;
    margin: 0 0 0 2rem;
    line-height: 3.5rem;
    text-align: justify;
  }
`;
