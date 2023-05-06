import { Container_Card_Skill } from "./styled";

export const Card_Skill = ({ image, title, description }) => {
  return (
    <Container_Card_Skill>
      <img
        className="image"
        src={`data:image/png;base64,${image}`}
        alt={`Imagem ${title}`}
      />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </Container_Card_Skill>
  );
};
