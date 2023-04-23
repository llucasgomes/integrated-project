import { Container_Card_Skill } from "./styled";

export const Card_Skill = ({ image, title, description }) => {
  return (
    <Container_Card_Skill>
      <img
        className="image"
        src="https://portifolio-2-0-ehvgjudyl-llucasgomes.vercel.app/assets/images/skills/logo-html5.png"
        alt="Image HTML5"
      />
      <h2 className="title">HTML</h2>
      <p className="description">
        Tenho conhecimento de como estruturar o HTML usando tags semânticas
      </p>
    </Container_Card_Skill>
  );
};
