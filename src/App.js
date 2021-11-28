import { useState } from "react";

// Contexts
import LanguageContext from "./contexts/language-context";

// Custom Hook
import useWindowDimensions from "./utils/hooks/useWindowDimensions";

// Containers
import HomeContainer from "./containers/HomeContainer/index";
import ProjectsContainer from "./containers/ProjectsContainer/index";
import TerminalAnimation from "./containers/TerminalAnimation";
import AboutContainer from "./containers/AboutContainer/index";
import StayInTouchContainer from "./containers/StayInTouchContainer/index";

// Components
import SocialNetworksLinks from "./components/SocialNetworksLinks/index";
import LanguageButton from "./components/LanguageButton/index";
import MailAddress from "./components/MailAddress/index";
import Logo from "./components/Logo";

// Data
import textsJSON from "./utils/data/texts.json";

function App() {
  const [language, setLanguage] = useState(textsJSON.english);
  const [displayAnimation, setDisplayAnimation] = useState(true);

  const dimensions = useWindowDimensions();

  return displayAnimation && dimensions.windowWidth > 600 ? (
    <TerminalAnimation setDisplayAnimation={setDisplayAnimation} />
  ) : (
    <main>
      <Logo />
      <SocialNetworksLinks />
      <LanguageContext.Provider value={language}>
        <LanguageButton setLanguage={setLanguage} />

        {/* Welcome */}
        <HomeContainer />

        {/* About */}
        <AboutContainer />

        {/* Projects */}
        <ProjectsContainer />

        {/* Stay in touch */}
        <StayInTouchContainer />
      </LanguageContext.Provider>
      <MailAddress />
    </main>
  );
}

export default App;
