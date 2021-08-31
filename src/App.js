import { useEffect, useState } from "react";
import "./scss/App.scss";

// Contexts
import LanguageContext from "./contexts/language-context";

// Containers
import HomeContainer from "./containers/HomeContainer/index";
import ProjectsContainer from "./containers/ProjectsContainer/index";
import TerminalAnimation from "./containers/TerminalAnimation";

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

  useEffect(() => {}, []);

  return displayAnimation ? (
    <TerminalAnimation setDisplayAnimation={setDisplayAnimation} />
  ) : (
    <>
      <Logo />
      <SocialNetworksLinks />
      <LanguageContext.Provider value={language}>
        <LanguageButton setLanguage={setLanguage} />
        <HomeContainer />
        <ProjectsContainer />
      </LanguageContext.Provider>
      <MailAddress />
    </>
  );
}

export default App;
