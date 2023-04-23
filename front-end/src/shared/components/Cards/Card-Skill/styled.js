import styled from "styled-components";

export const Container_Card_Skill = styled.div`
  width: 12rem;

  background-color: #ffffff;
  border: 0.1rem solid #dfdfdf;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 1rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .image {
    width: 70%;
    padding: 1rem 1rem;
  }

  .title {
    font-size: 1rem;
  }
  .description {
    font-size: 0.8rem;
    padding: 0.5rem 0.4rem;
    text-align: center;
  }
`;
