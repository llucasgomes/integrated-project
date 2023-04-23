import { Form_Email } from "../../Form-Email";
import { Mapa } from "../../Mapa";
import { Container_Contato } from "./styled";

export const Contato = () => {
  return (
    <Container_Contato>
      <div className="form-info">
        <Form_Email />

        <div className="info">
          <h2>Section right</h2>
        </div>
      </div>
      <Mapa />
    </Container_Contato>
  );
};
