//Pagindas Principais
import { Home, Page_Dashboard, Page_Login, Page_Register } from "../pages";

import { createBrowserRouter } from "react-router-dom";

// Paginas Secundarias Home
import {
  Contato,
  Habilidades,
  Portifolio,
  Resume,
  Sobre,
} from "../shared/components/Body_Home";

// Paginas Secundarias Dasboard
import {
  Bem_Vindo,
  Comments,
  D_Habilidades,
  D_Perfil,
  Education,
  Experiencia,
  Projects,
} from "../shared/components/Body_Dasboard";

export const Rota = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Resume />,
      },
      {
        path: "/portifolio",
        element: <Portifolio />,
      },
      {
        path: "/habilidades",
        element: <Habilidades />,
      },
      {
        path: "/comments",
        element: <Sobre />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
  {
    path: "/login",
    element: <Page_Login />,
  },
  {
    path: "/register",
    element: <Page_Register />,
  },
  {
    path: "/dashboard",
    element: <Page_Dashboard />,
    children: [
      {
        path: "/dashboard/",
        element: <Bem_Vindo />,
      },
      {
        path: "/dashboard/perfil",
        element: <D_Perfil />,
      },
      {
        path: "/dashboard/experiencias",
        element: <Experiencia />,
      },
      {
        path: "/dashboard/educacao",
        element: <Education />,
      },
      {
        path: "/dashboard/projetos",
        element: <Projects />,
      },
      {
        path: "/dashboard/skills",
        element: <D_Habilidades />,
      },
      {
        path: "/dashboard/comentarios",
        element: <Comments />,
      },
    ],
  },
]);
