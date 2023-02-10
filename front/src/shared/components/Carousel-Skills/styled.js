import styled from "styled-components";

export const C_Carrousel_Skills = styled.div`
  width: 100%;

  background: rgb(1, 40, 79);
  color: white;
  overflow: hidden;

  .marquee--wrapper {
    width: 400%;
    display: flex;
    position: relative;
    height: 100px;
    align-items: center;
    left: 0;
    animation: slide 50s linear infinite;
  }
  span {
    font-size: 2rem;
  }

  .wrapper {
    display: flex;
    justify-content: space-around;
    width: 400%;
    position: relative;
    left: 0;
  }
  /* always make sure left is half of thw width */

  @keyframes slide {
    100% {
      left: -200%;
    }
  }

  .marquee--wrapper:hover {
    animation-play-state: paused;
  }

  .marquee--wrapper:hover div:not(:hover) {
    opacity: 0.3;
  }

  .wrapper div {
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    transition: 0.5s;
    cursor: pointer;
    padding: 2rem 0;
  }

  .wrapper div img {
    filter: grayscale(100%);
    width: 35px;
  }

  .wrapper div:hover {
    transform: scale(1.2);
  }

  svg {
    color: white;
  }
`;
