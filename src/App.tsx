import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import IntroSectionPage from "./Components/IntroSectionPage/IntroSectionPage";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 18,
    },
    fontFamily: "Epilogue",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <IntroSectionPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
