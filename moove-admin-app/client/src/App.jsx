import { ThemeProvider } from "@mui/material";
import "./App.css";
import AppTheme from "./assets/theme/theme";
import AppRoutes from "./pages/AppRoutes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <AppRoutes theme={AppTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
