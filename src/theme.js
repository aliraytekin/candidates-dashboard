import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff"
    },
    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#555",
    },
    secondary: {
      main: "#ff9800",
    },
  }
})

export default theme;
