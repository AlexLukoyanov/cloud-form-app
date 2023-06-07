import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    body: "#F4F4F5",
    text: "#333333",
    white: "#FFFFFF",
    bgGrey: "rgba(0, 0, 0, 0.04)",
    borderGrey: "rgba(0, 0, 0, 0.24)",
    borderGreyLight: "rgba(0, 0, 0, 0.016)",
    blue: "#5558FA",
    grey: "#A6A6A6",
    greyLight: "rgba(0, 0, 0, 0.08)",
  },
  media: {
    sm: 575,
    md: 768,
    lg: 981,
    xl: 1366,
  },
};

export type Theme = typeof theme;

export const withThemeProvider = (component: () => ReactNode) => () =>
  <ThemeProvider theme={theme}>{component()}</ThemeProvider>;
