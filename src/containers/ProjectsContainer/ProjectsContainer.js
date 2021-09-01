import "./ProjectsContainer.scss";

import { useContext } from "react";

// Component
import ProjectOrientationRight from "../../components/ProjectOrientationRight";
import ProjectOrientationLeft from "../../components/ProjectOrientationLeft";

// Context
import LanguageContext from "../../contexts/language-context";

const ProjectsContainer = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="projects-container">
      {language.projects.map((item, index) => {
        if (index === 0 || index % 2 === 0) {
          return <ProjectOrientationRight key={index} item={item} />;
        } else {
          return <ProjectOrientationLeft key={index} item={item} />;
        }
      })}
    </div>
  );
};

export default ProjectsContainer;
