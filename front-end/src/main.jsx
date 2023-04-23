import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import GlobalStyle from "./styles/Global";
import background_image from "./assets/images/bg.png";

import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
    <GlobalStyle image={background_image} />
  </React.StrictMode>
);
