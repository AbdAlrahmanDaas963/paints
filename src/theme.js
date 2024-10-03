// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1D3557",
    },
    secondary: {
      main: "#457B9D",
    },
    third: {
      main: "#A8DADC",
    },
    fourth: {
      main: "#F1FAEE",
    },
    fith: {
      main: "#E63946",
    },
    white: {
      main: "#F8F7F3",
    },
    black: {
      main: "#020202",
    },
    orange: {
      main: "#FDB143",
    },
  },
  typography: {
    allVariants: {
      color: "#020202",
    },
    kalam: {
      fontFamily: '"Kalam", cursive',
    },
    inter: {
      fontFamily: '"Inter", sans-serif',
    },
    katibeh: {
      fontFamily: '"Katibeh", serif',
    },
  },
});

export default theme;
