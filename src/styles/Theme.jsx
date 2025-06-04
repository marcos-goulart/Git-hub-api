import PropTypes from "prop-types";
import React from "react";

import { ThemeProvider } from "styled-components";

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;

export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    background: "#191919",
    container: "#2d2d2d",
    red: "#E03131",
    orange: "#E8590C",
    yellow: "#FCC419",
    green: "#23DB42",
    teal: "#89DD13",
    cyan: "#3BC9DB",
    blue: "#25BEFF",
    indigo: "#4263Eb",
    purple: "#7E5CEF",
    pink: "#FE5895",
    metalDark: "#7f8c8d",
    gray100: "#FAFAFA",
    gray200: "#E9ECEF",
    gray300: "#DEE2E6",
    gray400: "#CED4DA",
    gray500: "#A4ACB4",
    gray600: "#64666B",
    gray700: "#424449",
    gray800: "#1D1E21",
    gray900: "#141518",
    primary: "#F83600",
    secondary: "#FE8C00",
    text: "#fff",
    turquese: '#1abc9c',
    turqueseDark: '#16a085',
    greenDark: '#27ae60',
    blueDark: '#2980b9',
    violet: '#9b59b6',
    violetDark: '#8e44ad',
    yellowDark: '#f39c12',
    orangeDark: '#d35400',
    redDark: '#c0392b',
    champagne: '#ecf0f1',
    champagneDark: '#bdc3c7',
    metal: '#95a5a6',
    asphalt: '#34495e',
    asphaltDark: '#2c3e50',
    carbon: '#555459',
    carbonDark: '#3b3a3e',
    danger: '#f37272',
    light: '#ecf0f1',
    dark: '#233240',
    link: '#3498db',
    devSamurai: '#f37272',
  },
  fonts: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
  fontSize: {
    small: '.8rem',
    normal: '1rem',
    large: '1.2rem',
    title: '1.3rem',
    subtitle: '1.25rem',
  },
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
    "2xl": rem(24),
    "3xl": rem(32),
    "4xl": rem(40),
    "5xl": rem(64),
  },
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
