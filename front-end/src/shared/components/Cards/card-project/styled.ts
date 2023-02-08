import styled from "styled-components";

interface ICardProjectProps {
  finalizado: boolean;
}

export const C_CardProject = styled.div<ICardProjectProps>`
  border-radius: 0.5rem;
  box-shadow: 0.7rem 0.7rem 1.3rem 0 rgba(50, 50, 50, 0.22);
  padding: 0.5rem 0 3rem 0;
  margin: 1rem auto;
  width: 30rem; //largura do card
  transition: all 0.3s ease-out;
  border-left: 3px solid ${(props) => (props.finalizado ? "#3bb54a" : "blue")}; // ira dizer se esta concluido ou nao
  /* background-color: red; */
  &&:hover {
    transform: translateY(-0.5rem);
    cursor: pointer;
  }

  p {
    color: #a3a5ae;
    font-size: 1.6rem;
    padding: 0 2rem;
  }

  .image {
    width: 100%;
    height: 120px;
    margin-bottom: 1rem;
  }
  .botoes {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .myButton {
      box-shadow: inset 0px 1px 3px 0px #91b8b3;
      background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
      background-color: #768d87;
      border-radius: 5px;
      border: 1px solid #566963;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      font-size: 15px;
      font-weight: bold;
      padding: 9px 13px;
      text-decoration: none;
      text-shadow: 0px -1px 0px #2b665e;
    }
    .myButton:hover {
      background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
      background-color: #6c7c7c;
    }
    .myButton:active {
      position: relative;
      top: 1px;
    }
  }
`;
