import styled from "styled-components";

export const C_CardSkill = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0.7rem 0.7rem 1.3rem 0 rgba(50, 50, 50, 0.22);
  padding: 3rem;
  margin: 1rem auto;
  width: 30rem; //largura do card
  transition: all 0.3s ease-out;
  border-left: 3px solid #3bb54a; // ira dizer se esta concluido ou nao

  &&:hover {
    transform: translateY(-0.5rem);
    cursor: pointer;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0.9rem;
  }
  p {
    color: #a3a5ae;
    font-size: 1.6rem;
  }

  .image {
    float: right;
    max-width: 5rem;
    max-height: 5rem;
  }
`;
