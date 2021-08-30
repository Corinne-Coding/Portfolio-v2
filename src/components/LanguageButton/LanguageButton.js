import "./LanguageButton.scss";
import { useContext } from "react";

// Contexts
import LanguageContext from "../../contexts/language-context";

const LanguageButton = ({ language, setLanguage }) => {
  const theme = useContext(LanguageContext);

  return (
    <div className="language-button">
      <span
        onClick={() => {
          setLanguage(language === "eng" ? "fr" : "eng");
        }}
      >
        {theme === "eng" ? "french" : "english"}
      </span>
    </div>
  );
};

export default LanguageButton;
