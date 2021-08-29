import { useState, useEffect } from "react";
import "./SocialNetworksLinks.scss";

// Components
import Icon from "../Icon/index";

const SocialNetworksLinks = () => {
  const [isLinkedinHover, setIsLinkedinHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);

  return (
    <ul className="social-networks-links">
      <li
        onMouseEnter={() => {
          setIsLinkedinHover(true);
        }}
        onMouseLeave={() => {
          setIsLinkedinHover(false);
        }}
      >
        <Icon name="linkedin" isHover={isLinkedinHover} />
      </li>

      <li
        onMouseEnter={() => {
          setIsGithubHover(true);
        }}
        onMouseLeave={() => {
          setIsGithubHover(false);
        }}
      >
        <Icon name="github" isHover={isGithubHover} />
      </li>
    </ul>
  );
};

export default SocialNetworksLinks;
