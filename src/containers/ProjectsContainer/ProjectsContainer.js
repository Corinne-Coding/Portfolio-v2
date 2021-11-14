import "./ProjectsContainer.scss";

import { useContext } from "react";

// Components
import ProjectOrientationRight from "../../components/ProjectOrientationRight";
import ProjectOrientationLeft from "../../components/ProjectOrientationLeft";

// Context
import LanguageContext from "../../contexts/language-context";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const ProjectsContainer = () => {
  const language = useContext(LanguageContext);

  return (
    <div className="projects-container">
      <Slide bottom effect="fadeInUp" duration={1000}>
        <p className="title">{language.projects.title}</p>
      </Slide>
      {language.projects.list.map((item, index) => {
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
