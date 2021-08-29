// Icons
import linkedinIconWhite from "../../utils/icons/linkedin-white.svg";
import linkedinIconYellow from "../../utils/icons/linkedin-yellow.svg";
import githubIconWhite from "../../utils/icons/github-2-white.svg";
import githubIconYellow from "../../utils/icons/github-2-yellow.svg";

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
    }
  };

  return <img src={generateIcon()} />;
};

export default Icon;
