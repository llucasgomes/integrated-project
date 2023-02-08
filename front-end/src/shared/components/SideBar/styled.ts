import styled from "styled-components";

export const Container_Sidebar = styled.section`
  position: fixed;
  min-width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #131615;
  .img-perfil {
    width: 15rem;
    border-radius: 50%;
    margin-top: 3rem;
    border: 0.2rem solid #e8e8e8;
  }
  .titulo {
    font-size: 2rem;
    margin-top: 2rem;
    color: #e8e8e8;
  }

  .menu {
    width: 100%;
    padding: 0 2rem;
    margin-top: 3rem;
  }
  .menu-item {
    text-decoration: none;
    list-style: none;
    display: flex;
    line-height: 4rem;
    padding: 0 3rem;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    label {
      font-size: 2rem;
      color: #e8e8e8;
      cursor: pointer;
    }
  }
`;
