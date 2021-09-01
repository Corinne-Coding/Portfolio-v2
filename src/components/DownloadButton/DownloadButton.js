import "./DownloadButton.scss";

import { useContext } from "react";

// Context
import LanguageContext from "../../contexts/language-context";

// CV
import CVfr from "../../utils/data/CV-Corinne-Pradier-fr.pdf";
import CVeng from "../../utils/data/CV-Corinne-Pradier-eng.pdf";

const DownloadButton = () => {
  const language = useContext(LanguageContext);

  return (
    <a
      className="download-button"
      href={language.switchLanguage === "french" ? CVeng : CVfr}
      download
    >
      <span>{language.resume}</span>
    </a>
  );
};

export default DownloadButton;
