"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-200: #e5e7eb;
    --sky-500: #0ea5e9;
  }
  body {
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.textColor};
  }
`;

export const theme = {
  bodyBg: "#ffffff",
  textColor: "#000000",
  dark: {
    bodyBg: "#1e293b",
    textColor: "#ffffff",
  },
};
