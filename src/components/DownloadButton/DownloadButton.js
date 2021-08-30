import "./DownloadButton.scss";

import { useContext } from "react";

// Context
import LanguageContext from "../../contexts/language-context";

// CV
import CV from "../../utils/data/CV-Corinne-Pradier.pdf";

const DownloadButton = () => {
  const language = useContext(LanguageContext);

  return (
    <a className="download-button" href={CV} download>
      <span>{language.resume}</span>
    </a>
  );
};

export default DownloadButton;
