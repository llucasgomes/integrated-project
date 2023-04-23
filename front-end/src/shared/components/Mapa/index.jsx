import { Container_Map } from "./styled";

export const Mapa = () => {
  return (
    <Container_Map>
      <h2 className="sub-titulo">Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1612185519575!2d-59.957140185865896!3d-3.0514720409578167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b95bc2a6123%3A0xbabe48a73ad5baaa!2sR.%20Itaj%C3%A1%2C%2018%20-%20Novo%20Aleixo%2C%20Manaus%20-%20AM%2C%2069098-252!5e0!3m2!1spt-BR!2sbr!4v1680660400871!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        className="mapa"
      />
    </Container_Map>
  );
};
