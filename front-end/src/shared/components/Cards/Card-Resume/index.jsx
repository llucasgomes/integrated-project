import { Container_Card_Resume } from "./styled";

export const Card_Resume = ({
  empresa,
  ano_inicio,
  ano_atual,
  descricao,
  cargo,
}) => {
  return (
    <Container_Card_Resume>
      <h2 className="titulo">{empresa}</h2>
      {cargo ? <h3 className="sub-titulo">{cargo}</h3> : null}
      <h3 className="sub-titulo">
        {ano_inicio} - {ano_atual}
      </h3>
      <p className="descricao">{descricao}</p>
    </Container_Card_Resume>
  );
};
