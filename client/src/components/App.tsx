import "../App.css";
import Canvas from "./canvas";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Canvas />
    </ThemeProvider>
  );
};

export default App;
