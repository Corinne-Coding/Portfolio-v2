import { useState } from "react";
import "./SocialNetworksLinks.scss";

// Components
import ExternalLink from "../ExternalLink/index";

const SocialNetworksLinks = () => {
  const [isLinkedinHover, setIsLinkedinHover] = useState(false);
  const [isGithubHover, setIsGithubHover] = useState(false);

  return (
    <ul className="social-networks-links">
      {/* Linkedin link */}
      <li>
        <ExternalLink
          setFunction={setIsLinkedinHover}
          name="linkedin"
          isHover={isLinkedinHover}
          url="https://www.linkedin.com/in/corinne-pradier-6610201b2/"
        />
      </li>

      {/* Github link */}
      <li>
        <ExternalLink
          setFunction={setIsGithubHover}
          name="github"
          isHover={isGithubHover}
          url="https://github.com/Corinne-Coding"
        />
      </li>
    </ul>
  );
};

export default SocialNetworksLinks;
