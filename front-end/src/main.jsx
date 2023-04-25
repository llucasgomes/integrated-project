import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import GlobalStyle from "./styles/Global";
import background_image from "./assets/images/bg.png";

import { RouterProvider } from "react-router-dom";
import { Rota } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Rota} />
    <GlobalStyle image={background_image} />
  </React.StrictMode>
);
