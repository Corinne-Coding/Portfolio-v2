import "./ExternalLink.scss";

// Components
import Icon from "../Icon/index";

const ExternalLink = ({ setFunction, name, isHover, url }) => {
  return (
    <a
      onMouseEnter={() => {
        setFunction(true);
      }}
      onMouseLeave={() => {
        setFunction(false);
      }}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon name={name} isHover={isHover} />
    </a>
  );
};

export default ExternalLink;
