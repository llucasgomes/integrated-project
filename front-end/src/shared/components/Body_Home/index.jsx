import { Container_Contente } from "./styled";

import { Outlet } from "react-router-dom";

export const Contente = () => {
  return (
    <Container_Contente>
      <Outlet />
    </Container_Contente>
  );
};
