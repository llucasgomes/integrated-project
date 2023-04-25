import { Body_Dashboard } from "../../shared/components/Body_Dasboard";
import { Sidebar } from "../../shared/components/Sidebar";
import { Container_Dasboard } from "./styled";

export const Page_Dashboard = () => {
  return (
    <Container_Dasboard>
      <Sidebar />
      <Body_Dashboard />
    </Container_Dasboard>
  );
};
