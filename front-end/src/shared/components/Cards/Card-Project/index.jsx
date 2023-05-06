import { Container_Card_Project } from "./styled";

export const Card_Project = ({ image, title, description, github, page }) => {
  return (
    <Container_Card_Project>
      <img
        className="image"
        src={`data:image/png;base64,${image}`}
        alt={`Imagem ${title}`}
      />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="container-links">
        <a className="link" href={github} target="_blank">
          GitHub
        </a>
        <a className="link" href={page} target="_blank">
          Page
        </a>
      </div>
    </Container_Card_Project>
  );
};
