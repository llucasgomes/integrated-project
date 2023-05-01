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
            to={"https://github.com/llucasgomes"}
            className="cartao_link"
            target="_blank"
          >
            <GithubLogo size={56} weight="regular" />
          </Link>

          <Link
            className="cartao_link"
            target="_blank"
            to={"https://www.linkedin.com/in/llucasgomess/"}
          >
            <LinkedinLogo size={56} weight="regular" />
          </Link>

          <Link
            className="cartao_link"
            target="_blank"
            to={
              "https://wa.me/5592988471665?text=Ola+podemos+conversar%3F+Adorei+seu+portiflio"
            }
          >
            <WhatsappLogo size={56} weight="regular" />
          </Link>

          <Link
            className="cartao_link"
            target="_blank"
            to={"https://www.instagram.com/lluca_sgomess/"}
          >
            <InstagramLogo size={56} weight="regular" />
          </Link>
        </div>
      </div>
      <Mapa />
    </Container_Contato>
  );
};
