import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Normalize } from "styled-normalize";
import { AppRoutes } from "./routes";

import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/Theme";

const basename = process.env.NODE_ENV === "production" ? "/Git-hub-api" : "/"

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Theme>
        <AppRoutes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
}
