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
  },
  typography: {
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
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         fontFamily: '"Katibeh", serif', // Set the global font family for all MUI Buttons
  //       },
  //     },
  //   },
  // },
});

export default theme;
