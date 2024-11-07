import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme, styled } from "@mui/material";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffeb3b", // Yellow
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
const MainLayout = styled('div')({
  display: 'flex',
  height: '100vh',
  width: '100%',
  backgroundColor: '#121212', // Background color for the entire app
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <MainLayout>
      <CssBaseline />
      <App />
     </MainLayout>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
