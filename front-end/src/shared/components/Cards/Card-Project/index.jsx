import { Container_Card_Project } from "./styled";

export const Card_Project = ({ image, title, description }) => {
  return (
    <Container_Card_Project>
      <img
        className="image"
        src="https://llucasgomes.github.io/portifolio/assets/image/iphone.png"
        alt="Image HTML5"
      />
      <h2 className="title">Clone Iphone</h2>
      <p className="description">
        Este é um projeto onde faço um clone do Site de Vendas do Iphone
      </p>
      <div className="container-links">
        <a className="link">GitHub</a>
        <a className="link">Page</a>
      </div>
    </Container_Card_Project>
  );
};
