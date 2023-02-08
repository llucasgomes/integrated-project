import styled from "styled-components";

export const Container_Projetos = styled.section`
  width: calc(100vw - 20%);
  height: 100vh;
  margin-left: calc(100vw - 80%);
  padding: 2rem;

  h1,
  h2 {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1rem;
    font-family: var(--inter);
  }
  h2 {
    font-size: 2rem;
    padding: 0 2rem;
    margin-bottom: 2rem;
  }

  .projetos-grid {
    /* width: 100%; */
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    /* margin: 0 auto; */
    display: grid;
    gap: 1rem;
  }
`;
