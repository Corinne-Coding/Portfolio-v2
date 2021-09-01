import "./StayInTouchContainer.scss";

import { useContext } from "react";

// Context
import LanguageContext from "../../contexts/language-context";

// Components
import MailButton from "../../components/MailButton";

const StayInTouchContainer = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="stay-in-touch-container">
      <p className="title">{language.getInTouch.title}</p>
      {language.getInTouch.texts.map((text, index) => {
        return <p key={index}>{text}</p>;
      })}

      <MailButton />
    </div>
  );
};

export default StayInTouchContainer;
