import "./StayInTouchContainer.scss";

import { useContext } from "react";

// Context
import LanguageContext from "../../contexts/language-context";

// Components
import MailButton from "../../components/MailButton";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const StayInTouchContainer = () => {
  const language = useContext(LanguageContext);

  return (
    <Slide bottom effect="fadeInUp" duration={1000}>
      <div className="stay-in-touch-container">
        <p className="title">{language.getInTouch.title}</p>
        {language.getInTouch.texts.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}

        <MailButton />
      </div>
    </Slide>
  );
};

export default StayInTouchContainer;
