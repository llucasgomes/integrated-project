import styled from "styled-components";

export const Container_Form = styled.div`
  width: 50%;
  height: 300px;
  display: flex;

  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;

  .title {
    font-size: 1.2rem;
    padding-left: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;

  @media (max-width: 550px) {
    display: block;
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;
`;

export const Button = styled.button`
  width: 70%;
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
