import { About } from "../About";
import { Experience } from "../Experience";

import { Container_Body } from "./styled";

export const Resume = () => {
  return (
    <Container_Body>
      <About />
      <Experience />
    </Container_Body>
  );
};
