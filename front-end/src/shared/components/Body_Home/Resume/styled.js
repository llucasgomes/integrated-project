import styled from "styled-components";

export const Container_Resume = styled.div`
  width: 100%;
  padding: 2rem;
  .descricao-breve {
    width: 100%;
    margin: 3rem 0;
    p {
      text-align: center;
      font-size: 1rem;
    }
  }

  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }

  .container-resume {
    max-width: 100%;
    height: 100%;
    padding: 0 0.5rem;
    display: flex;
    gap: 1rem;
  }

  .container-left {
    width: 50%;
    height: 100%;

    .sub_title {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
  }
  .container-rigth {
    width: 50%;
    height: 100%;

    .sub_title {
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }
`;
