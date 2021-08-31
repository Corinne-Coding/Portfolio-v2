import "./Project.scss";

import { useState } from "react";

// Components
import ExternalLink from "../ExternalLink/index";

const Project = ({ item }) => {
  const [isNetlifyHover, setIsNetlifyHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);
  const [isQRCodeHover, setIsQRCodeHover] = useState(false);

  return (
    <section className="project">
      {/* Project screenshot */}
      <div className="picture">
        <img src={item.imageURL} alt="project screenshot" />
      </div>

      {/* Texts */}
      <div className="texts">
        <div>
          <p className="type">{item.type}</p>

          <p className="title">{item.title}</p>

          <div className="description-container">
            <p>{item.description}</p>
          </div>

          <p className="technologies">
            {item.technologies.map((techno, index) => {
              return <span key={index}>{techno}</span>;
            })}
          </p>

          <ul className="icons">
            {item.githubURL && (
              <li>
                <ExternalLink
                  setFunction={setIsGithubHover}
                  name="github-circle"
                  isHover={isGithubHover}
                  url={item.githubURL}
                />
              </li>
            )}

            {item.netlifyURL && (
              <li>
                <ExternalLink
                  setFunction={setIsNetlifyHover}
                  name="netlify-link"
                  isHover={isNetlifyHover}
                  url={item.netlifyURL}
                />
              </li>
            )}

            {item.qrCode && (
              <li>
                <ExternalLink
                  setFunction={setIsQRCodeHover}
                  name="qr-code"
                  isHover={isQRCodeHover}
                  url={item.qrCode}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;
