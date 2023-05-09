import styled from "styled-components";

export const Container_Home = styled.div`
  width: 100vw;
  /* height: auto; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem 0 5rem 0;

  .container {
    width: 60%;
    /* height: ; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

export const Container_Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;
