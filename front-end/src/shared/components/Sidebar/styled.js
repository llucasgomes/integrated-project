import styled from "styled-components";

export const Container_Sidebar = styled.div`
  max-width: 18rem;
  height: 100%;
  background-color: #ffffff;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 70%;
    border-radius: 0.8rem;
  }

  .list {
    width: 100%;
    margin-top: 2rem;
  }

  .list .list_item {
    font-size: 1.5rem;
    list-style: none;
    display: inline-block;
    width: 100%;
    padding: 0.2rem 0;
    padding-left: 2rem;
    border-radius: 0.8rem;
    font-size: 1.3rem;
    margin-bottom: 0.1rem;
    cursor: pointer;

    &:hover {
      background-color: #e8e8e8;
    }
  }
`;
