// MUI
import { ThemeProvider, CssBaseline } from "@mui/material";
// import { Container, Typography } from "@mui/material";
// import Button from "@mui/material/Button";
import theme from "./theme";

import Header from "./components/Header";
import WelcomeSection from "./pages/LandingPage/WelcomeSection";
import AboutmeSection from "./pages/LandingPage/AboutmeSection";
import CategSection from "./pages/LandingPage/CategSection";
import PaintsSections from "./pages/LandingPage/PaintsSections";
import EventsSection from "./pages/LandingPage/EventsSection";
import ThanksSection from "./pages/LandingPage/ThanksSection";
import Footer from "./pages/LandingPage/Footer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <WelcomeSection />
        <AboutmeSection />
        <CategSection />
        <PaintsSections />
        <ThanksSection />
        <Footer />

        {/* <Container className="container">
          <div style={{ padding: "20px" }}>
            <h1>Custom MUI Theme Example</h1>
            <Button variant="contained" color="primary">
              Primary Button
            </Button>
            <Button variant="contained" color="secondary">
              Secondary Button
            </Button>
            <Typography sx={{ ...theme.typography.kalam }}>
              This text uses the  Kalam  font.
            </Typography>
            <Typography sx={{ ...theme.typography.inter }}>
              This text uses the  Inter  font.
            </Typography>
            <Typography sx={{ ...theme.typography.katibeh }}>
              This text uses the  Katibeh  font.
            </Typography>
          </div>
        </Container> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
