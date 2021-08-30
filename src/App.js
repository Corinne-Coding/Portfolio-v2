import { useState } from "react";
import "./scss/App.scss";

// Contexts
import LanguageContext from "./contexts/language-context";

// Components
import SocialNetworksLinks from "./components/SocialNetworksLinks/index";
import HomeContainer from "./containers/HomeContainer/index";
import LanguageButton from "./components/LanguageButton/index";

// Data
import textsJSON from "./utils/data/texts.json";

function App() {
  const [language, setLanguage] = useState(textsJSON.english);

  return (
    <>
      <SocialNetworksLinks />
      <LanguageContext.Provider value={language}>
        <LanguageButton setLanguage={setLanguage} />

        <HomeContainer />
        {/* <MainContainer height="100vh" /> */}
      </LanguageContext.Provider>
    </>
  );
}

export default App;

/*

   <p>
      I mainly work with the following technologies :
      <code>
        JavaScript / HTML / CSS / React / React Native / Expo / Node.js
      </code>
      . I am a passionate and hardworking woman, loving to embark on new
      challenging projects. I’m based in Paris and I also work as a teacher at
      Le Reacteur bootcamp.
    </p>


 */
