import { Outlet } from "react-router-dom";
import { Container_Body_Dashboard } from "./styled";

export const Body_Dashboard = () => {
  return (
    <Container_Body_Dashboard>
      <Outlet />
    </Container_Body_Dashboard>
  );
};
