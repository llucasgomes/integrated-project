import { C_CardProject } from "./styled";

export const Card_Project = () => {
  return (
    <C_CardProject finalizado={false}>
      <img
        className="image"
        src="https://llucasgomes.github.io/portifolio/assets/image/iphone.png"
        alt=" imagem do projeto"
      />
      <h2>Monetização</h2>
      <p>
        Editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e
        macOS
      </p>
      <div className="botoes">
        <a href="#" className="myButton" target="_blank">
          Git
        </a>
        <a href="#" className="myButton" target="_blank">
          Page
        </a>
      </div>
    </C_CardProject>
  );
};
