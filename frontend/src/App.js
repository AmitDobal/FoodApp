import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme} >
      <CssBaseline/>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </ThemeProvider>
  );
}

export default App;
