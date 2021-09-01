import "./ProjectOrientationRight.scss";

import { useState } from "react";

// Components
import ExternalLink from "../ExternalLink/index";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const ProjectOrientationRight = ({ item }) => {
  const [isNetlifyHover, setIsNetlifyHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);
  const [isQRCodeHover, setIsQRCodeHover] = useState(false);

  return (
    <Slide bottom effect="fadeInUp" duration={1000}>
      <section className="project-orientation-right">
        {/* Project screenshot */}
        <div className="picture">
          <a
            target="_blank"
            href={item.netlifyURL ? item.netlifyURL : item.qrCode}
            rel="noreferrer"
          >
            <img src={item.imageURL} alt="project screenshot" />
          </a>
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
    </Slide>
  );
};

export default ProjectOrientationRight;
