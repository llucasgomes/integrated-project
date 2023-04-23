import styled from "styled-components";

export const Container_Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 550px) {
    height: auto;
  }
`;

export const Container_Formulario = styled.div`
  max-width: 35rem;
  height: 25rem;
  border: 1px solid #aaaaaa;
  border-radius: 0.5rem;
  position: relative;
  padding: 3.5rem 2rem;
  color: #272727;
  font-weight: 300;
  background-color: #ffffff;

  h3 {
    position: absolute;
    top: -1rem;
    left: 1.5rem;
    background: #ffffff;
    padding: 0 0.2rem;
    font-size: 1.5rem;
    font-weight: 300;
  }
  @media (max-width: 649px) {
    width: 90%;
    /* background: green; */
  }
  @media (max-width: 550px) {
    margin-top: 3rem;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 30rem;
  max-height: 38rem;
  border: 1px solid #aaaaaa;
  border-radius: 0.5rem;
  position: relative;
  padding: 2rem 2rem;
  color: #272727;
  font-weight: 300;
  margin: 3rem auto;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  display: block;
  flex-direction: column;
  p {
    font-weight: 300;
    font-size: 0.8rem;
    margin: 1rem 0;
    text-align: center;
  }

  @media (max-width: 550px) {
    display: block;
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  text-align: end;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  background-color: #4c984c;
  border: 1px solid #4c984c;
  cursor: pointer;
  color: #ffffff;
  font-weight: 300;
  font-size: 1.3rem;

  &&:hover {
    background-color: #247830;
  }
`;
