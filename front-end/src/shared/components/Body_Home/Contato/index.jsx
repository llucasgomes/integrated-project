import { Form_Email } from "../../Form-Email";
import { Mapa } from "../../Mapa";
import { Container_Contato } from "./styled";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";

import { Link } from "react-router-dom";

export const Contato = () => {
  return (
    <Container_Contato>
      <div className="form-info">
        <Form_Email />

        <div className="info">
          <Link
            to={"https://www.google.com.br"}
            className="cartao_link"
            target="_blank"
          >
            <GithubLogo size={56} weight="regular" />
          </Link>

          <Link
            className="cartao_link"
            target="_blank"
            to={"https://www.google.com.br"}
          >
            <LinkedinLogo size={56} weight="regular" />
          </Link>

          <Link
            className="cartao_link"
            target="_blank"
            to={"https://www.google.com.br"}
          >
            <WhatsappLogo size={56} weight="regular" />
          </Link>

          <Link
            className="cartao_link"
            target="_blank"
            to={"https://www.google.com.br"}
          >
            <InstagramLogo size={56} weight="regular" />
          </Link>
        </div>
      </div>
      <Mapa />
    </Container_Contato>
  );
};
