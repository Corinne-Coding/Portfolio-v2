import "./Icon.scss";

// Icons
import linkedinIconWhite from "../../utils/icons/linkedin-white.svg";
import linkedinIconYellow from "../../utils/icons/linkedin-yellow.svg";
import githubIconWhite from "../../utils/icons/github-2-white.svg";
import githubIconYellow from "../../utils/icons/github-2-yellow.svg";
import githubCircleIconWhite from "../../utils/icons/github-1-white.svg";
import githubCircleIconYellow from "../../utils/icons/github-1-yellow.svg";
import externalLinkIconWhite from "../../utils/icons/external-link-white.svg";
import externalLinkIconYellow from "../../utils/icons/external-link-yellow.svg";

const Icon = ({ name, isHover }) => {
  const generateIcon = () => {
    if (name === "linkedin" && !isHover) {
      return linkedinIconWhite;
    } else if (name === "linkedin" && isHover) {
      return linkedinIconYellow;
    } else if (name === "github" && !isHover) {
      return githubIconWhite;
    } else if (name === "github" && isHover) {
      return githubIconYellow;
    } else if (name === "github-circle" && !isHover) {
      return githubCircleIconWhite;
    } else if (name === "github-circle" && isHover) {
      return githubCircleIconYellow;
    } else if (name === "external-link" && !isHover) {
      return externalLinkIconWhite;
    } else if (name === "external-link" && isHover) {
      return externalLinkIconYellow;
    }
  };

  return <img src={generateIcon()} className="icon" alt="social" />;
};

export default Icon;
