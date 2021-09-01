import "./MailButton.scss";

import { useContext } from "react";

// Context
import LanguageContext from "../../contexts/language-context";

const MailButton = () => {
  const language = useContext(LanguageContext);

  return (
    <a className="mail-button" href="mailto:pradier.corinne@gmail.com">
      <span>{language.getInTouch.mail}</span>
    </a>
  );
};

export default MailButton;
