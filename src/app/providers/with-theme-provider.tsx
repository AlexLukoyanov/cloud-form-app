import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    body: "#F4F4F5",
    white: "#FFFFFF",
    purple: "#5558FA",
    red: "#E84E58",
    blueLight: "#D5E4F7",
    text: {
      primaryG800: "#333333",
      secondaryG600: "#666666",
      tertiaryG350: "#A6A6A6",
    },
    alpha: {
      "4": "rgba(0, 0, 0, 0.04)",
      "8": "rgba(0, 0, 0, 0.08)",
      "16": "rgba(0, 0, 0, 0.16)",
      "24": "rgba(0, 0, 0, 0.24)",
      "48": "rgba(0, 0, 0, 0.48)",
    },
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
