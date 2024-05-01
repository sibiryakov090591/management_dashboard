import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: "#eef1f7",
      dark: "#6b75ca",
      light: "#f7f8fd",
      contrastText: "#fefefe",
    },
    secondary: {
      main: "#363950",
      contrastText: "#b6c2d4",
    },
    error: {
      main: red.A400,
    },
  },
});

theme = createTheme(theme, {
  palette: {
    button: {
      main: "#363950",
      contrastText: "#f7f8fd",
    },
  },
});

export default theme;
