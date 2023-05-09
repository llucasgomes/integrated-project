import styled from "styled-components";

export const Container_Perfil = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 1.6rem;
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
`;
export const Container_Form = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
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
export const RowImage = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  position: relative;

  .foto-perfil {
    width: 15rem;
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    object-fit: fill;
    position: relative;
  }

  @media (max-width: 550px) {
    display: block;
    flex-direction: column;
  }
`;

export const Container_Image = styled.label`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  top: -1.5rem;
  left: calc(60% + 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  input[type="file"] {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;
  margin-top: 1rem;
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
