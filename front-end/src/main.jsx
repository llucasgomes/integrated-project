import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import GlobalStyle from "./styles/Global";
import background_image from "./assets/images/bg.png";

import { RouterProvider } from "react-router-dom";
import { Rota } from "./routes";
import { DataContextProvider } from "./shared/contexts/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <RouterProvider router={Rota} />
      <GlobalStyle image={background_image} />
    </DataContextProvider>
  </React.StrictMode>
);
