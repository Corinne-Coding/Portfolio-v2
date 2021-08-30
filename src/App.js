import { useState } from "react";
import "./scss/App.scss";

// Contexts
import LanguageContext from "./contexts/language-context";

// Components
import SocialNetworksLinks from "./components/SocialNetworksLinks/index";
import MainContainer from "./containers/MainContainer/index";
import LanguageButton from "./components/LanguageButton/index";

function App() {
  const [language, setLanguage] = useState("eng");

  return (
    <>
      <SocialNetworksLinks />
      <LanguageContext.Provider value={language}>
        <LanguageButton language={language} setLanguage={setLanguage} />
        <main>
          <MainContainer />
          <MainContainer />
        </main>
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
