import { useState } from "react";
import "./scss/App.scss";

// Contexts
import LanguageContext from "./contexts/language-context";

// Components
import SocialNetworksLinks from "./components/SocialNetworksLinks/index";
import HomeContainer from "./containers/HomeContainer/index";
import LanguageButton from "./components/LanguageButton/index";
import MailAddress from "./components/MailAddress/index";
import Logo from "./components/Logo";

// Data
import textsJSON from "./utils/data/texts.json";

function App() {
  const [language, setLanguage] = useState(textsJSON.english);

  return (
    <>
      <Logo />
      <SocialNetworksLinks />
      <LanguageContext.Provider value={language}>
        <LanguageButton setLanguage={setLanguage} />
        <HomeContainer />
        <HomeContainer />
        <HomeContainer />
      </LanguageContext.Provider>
      <MailAddress />
    </>
  );
}

export default App;
