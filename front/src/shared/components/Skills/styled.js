import styled from "styled-components";

export const Container_Habilidades = styled.section`
  width: 80%;
  height: 100vh;
  margin-left: 20%;
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
  }

  .container-skills {
    /* width: 100%; */
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    /* margin: 0 auto; */
    display: grid;
    gap: 1rem;
  }
`;
