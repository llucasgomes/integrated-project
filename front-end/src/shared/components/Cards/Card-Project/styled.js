import styled from "styled-components";

export const Container_Card_Project = styled.div`
  width: 19rem;
  background-color: #ffffff;
  border: 0.1rem solid #dfdfdf;
  border-radius: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .image {
    width: 70%;
    height: 10rem;
    padding: 1rem 0;
    object-fit: fill;
  }

  .title {
    font-size: 1.3rem;
  }
  .description {
    font-size: 0.9rem;
    padding: 0.5rem 0.4rem;
  }
  .container-links {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    font-size: 0.8rem;

    .link {
      width: 30%;
      border-radius: 0.8rem;
      cursor: pointer;

      padding: 0.5rem;
      text-align: center;
      color: #000000;
      font-size: 0.9rem;
      border: 0.1rem solid #dfdfdf;

      &:hover {
        background: #4c7291;
        color: #ffffff;
      }
    }
  }
`;
