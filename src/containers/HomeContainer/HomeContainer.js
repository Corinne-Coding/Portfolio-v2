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

      <div>
        {language.descriptionText.map((item, index) => {
          if (index === 2 || index === 4) {
            return <span className="description">{item}</span>;
          } else if (index === 3) {
            return (
              <a className="description" href="https://www.lereacteur.io/">
                {item}
              </a>
            );
          } else {
            return <p className="description">{item}</p>;
          }
        })}
      </div>

      <DownloadButton />
    </div>
  );
};

export default HomeContainer;
