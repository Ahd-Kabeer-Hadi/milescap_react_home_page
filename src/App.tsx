import "./App.css";
import AccountTypes from "./blocks/Account-types";
import Footer from "./blocks/Footer";
import Header from "./blocks/Header";
import JoinFamily from "./blocks/Join-family-cta";
import AppDownload from "./blocks/app-download";
import { HeroParallax } from "./blocks/hero";
import { OurServices } from "./blocks/services";
import Features from "./blocks/why-us";
import { ThemeProvider } from "./components/theme-provider";
import { services } from "./lib/constants/services";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Header />
        <div className="w-full  flex items-center justify-center ">
          <HeroParallax products={services} />
        </div>
        <div className="w-full flex items-center justify-center mb-8 ">
          <OurServices />
        </div>
        <div className="w-full flex items-center justify-center mb-8 ">
          <AccountTypes />
        </div>
        <div className="w-full flex items-center justify-center mb-8 ">
          <Features />
        </div>
        <div className="w-full flex items-center justify-center mb-8 ">
          <JoinFamily />
        </div>
        <div className="w-full flex items-center justify-center mb-8 ">
          <AppDownload />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
