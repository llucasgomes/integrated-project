import styled from "styled-components";

export const Container_Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContainer {
    width: 47rem;
    height: auto;
    border-radius: 1rem;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0 0.5 1.5rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .title {
      display: inline-block;
      text-align: center;
      font-size: 0.5rem;
    }

    .titleCloseBtn {
      display: flex;
      justify-content: flex-end;

      button {
        background-color: transparent;
        border: none;
        font-size: 1rem;
        cursor: pointer;
      }
    }
    .body {
      flex: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.7rem;
      text-align: center;
    }
    .footer {
      flex: 20%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 13rem;
        height: 3rem;
        margin: 1rem;
        border: none;
        background-color: cornflowerblue;
        color: #ffffff;
        border-radius: 0.9rem;
        font-size: 1.3rem;
        cursor: pointer;
      }
    }
    #cancelBtn {
      background-color: crimson;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flex == "column" ? "column" : "flex")};
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  img {
    width: 10rem;
  }

  @media (max-width: 550px) {
    display: block;
    flex-direction: column;
  }
`;
