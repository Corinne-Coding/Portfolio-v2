import "./LanguageButton.scss";
import { useContext } from "react";

// Contexts
import LanguageContext from "../../contexts/language-context";

// Data
import textsJSON from "../../utils/data/texts.json";

const LanguageButton = ({ setLanguage }) => {
  const language = useContext(LanguageContext);

  return (
    <div className="language-button">
      <span
        onClick={() => {
          setLanguage(
            language === textsJSON.english
              ? textsJSON.french
              : textsJSON.english
          );
        }}
      >
        {language.switchLanguage}
      </span>
    </div>
  );
};

export default LanguageButton;
