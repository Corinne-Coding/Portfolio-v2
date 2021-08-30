import "./Project.scss";

import { useState } from "react";

// Components
import Icon from "../Icon";

const Project = ({ item }) => {
  const [isLinkHover, setIsLinkHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);

  return (
    <section className="project">
      {/* Screenshot */}
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

          <div className="icons">
            <a
              href={item.githubURL}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                setIsLinkHover(true);
              }}
              onMouseLeave={() => {
                setIsLinkHover(false);
              }}
            >
              <Icon name="github-circle" isHover={isLinkHover} />
            </a>
            <a
              href={item.netlifyURL}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                setIsGithubHover(true);
              }}
              onMouseLeave={() => {
                setIsGithubHover(false);
              }}
            >
              <Icon name="external-link" isHover={isGithubHover} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
