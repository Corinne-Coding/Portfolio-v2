import "./ProjectsContainer.scss";

import { useContext } from "react";

// Component
import Project from "../../components/Project";

// Context
import LanguageContext from "../../contexts/language-context";

const ProjectsContainer = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="projects-container">
      {language.projects.map((item, index) => {
        return <Project key={index} item={item} />;
      })}
    </div>
  );
};

export default ProjectsContainer;
