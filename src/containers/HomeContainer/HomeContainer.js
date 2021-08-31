import "./HomeContainer.scss";

import { useContext } from "react";

// Context
import LanguageContext from "../../contexts/language-context";

// Components
import DownloadButton from "../../components/DownloadButton";

const HomeContainer = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="home-container">
      <p className="first-line">{language.firstLine}</p>

      <p className="name">Corinne Pradier.</p>

      <p className="subtitle">{language.subTitle}</p>

      <div className="description-container">
        {language.descriptionText.map((item, index) => {
          if (index === 2 || index === 4) {
            return (
              <span key={index} className="description">
                {item}
              </span>
            );
          } else if (index === 3) {
            return (
              <a
                key={index}
                className="description"
                href="https://www.lereacteur.io/"
              >
                {item}
              </a>
            );
          } else if (index === 0) {
            return (
              <div key={index} className="description">
                <span>{item}</span>
                <code>
                  JavaScript / HTML / CSS / React / React Native / NodeJS.
                </code>
              </div>
            );
          } else {
            return (
              <p key={index} className="description">
                {item}
              </p>
            );
          }
        })}
      </div>

      <DownloadButton />
    </div>
  );
};

export default HomeContainer;
