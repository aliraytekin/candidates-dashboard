import DashboardPage from "./pages/DashboardPage"
import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from "./theme"


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardPage />
      </ThemeProvider>
    </div>
  )
}

export default App
