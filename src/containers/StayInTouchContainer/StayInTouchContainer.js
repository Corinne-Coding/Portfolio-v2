import "./StayInTouchContainer.scss";

import { useContext } from "react";

// Context
import LanguageContext from "../../contexts/language-context";

// Custom Hook
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

// Components
import Footer from "../../components/Footer/index";
import MailButton from "../../components/MailButton";
import Title from "../../components/Title";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const StayInTouchContainer = () => {
  const language = useContext(LanguageContext);

  const dimensions = useWindowDimensions();

  return (
    <div
      className="stay-in-touch-container"
      style={{ height: dimensions.windowHeight }}
    >
      {dimensions.windowWidth > 1023 ? (
        <Slide bottom effect="fadeInUp" duration={1000}>
          <div className="texts-container">
            <Title text={language.getInTouch.title} />
            {language.getInTouch.texts.map((text, index) => {
              return <p key={index}>{text}</p>;
            })}

            <MailButton />
          </div>
        </Slide>
      ) : (
        <div className="texts-container">
          <Title text={language.getInTouch.title} />
          {language.getInTouch.texts.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}

          <MailButton />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default StayInTouchContainer;
