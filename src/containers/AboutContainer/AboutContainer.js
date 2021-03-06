import "./AboutContainer.scss";

import { useContext } from "react";

// Components
import Title from "../../components/Title";

// Context
import LanguageContext from "../../contexts/language-context";

// Custom Hook
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

// Pictures
import profilePicture from "../../utils/images/profile-pic.jpeg";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const AboutContainer = ({ inputRef }) => {
  const language = useContext(LanguageContext);

  const dimensions = useWindowDimensions();

  return dimensions.windowWidth > 1023 ? (
    <Slide bottom effect="fadeInUp" duration={1000}>
      <div className="about-container" ref={inputRef}>
        <div className="texts-container">
          <Title text={language.about.title} />
          <div className="texts">
            {language.about.texts.map((text, i) => {
              return (
                <p key={i}>
                  {text.map((part, j) => {
                    if (i === 2 && j === 1) {
                      return (
                        <a
                          href="https://www.lereacteur.io/"
                          target="_blank"
                          rel="noreferrer"
                          className="bold"
                          key={j}
                        >
                          {part}
                        </a>
                      );
                    }
                    if (j === 0 || j === 2 || j === 4) {
                      return <span key={j}>{part}</span>;
                    } else {
                      return (
                        <span className="bold" key={j}>
                          {part}
                        </span>
                      );
                    }
                  })}
                </p>
              );
            })}
          </div>
        </div>

        <div className="picture-container">
          <img src={profilePicture} alt="me" />
        </div>
      </div>
    </Slide>
  ) : (
    <>
      <div className="about-container" ref={inputRef}>
        <div className="texts-container">
          <Title text={language.about.title} />
          <div className="texts">
            {language.about.texts.map((text, i) => {
              return (
                <p key={i}>
                  {text.map((part, j) => {
                    if (i === 2 && j === 1) {
                      return (
                        <a
                          href="https://www.lereacteur.io/"
                          target="_blank"
                          rel="noreferrer"
                          className="bold"
                          key={j}
                        >
                          {part}
                        </a>
                      );
                    }
                    if (j === 0 || j === 2 || j === 4) {
                      return <span key={j}>{part}</span>;
                    } else {
                      return (
                        <span className="bold" key={j}>
                          {part}
                        </span>
                      );
                    }
                  })}
                </p>
              );
            })}
          </div>
        </div>

        <div className="picture-container">
          <img src={profilePicture} alt="me" />
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
