// components/ThemeProvider.js
"use client";
import React from "react";
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --gray-200: #e5e7eb;
    --sky-500: #00bbff;
    // Add other necessary variables
  }
  body {
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.textColor};
  }
`;

const theme = {
  bodyBg: '#ffffff',
  textColor: '#000000',
  dark: {
    bodyBg: '#1e293b',
    textColor: '#ffffff',
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
