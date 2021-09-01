import { useEffect } from "react";

import "./AboutContainer.scss";

import profilePicture from "../../utils/images/profile-pic.jpeg";

const AboutContainer = ({ language }) => {
  return (
    <div className="about-container">
      <div className="texts-container">
        <p className="title">{language.about.title}</p>
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
  );
};

export default AboutContainer;

/*




*/
