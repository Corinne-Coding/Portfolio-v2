import "./ProjectsContainer.scss";

import { useContext } from "react";

// Context
import LanguageContext from "../../contexts/language-context";

// Custom Hook
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

// Components
import ProjectOrientationRight from "../../components/ProjectOrientationRight";
import ProjectOrientationLeft from "../../components/ProjectOrientationLeft";
import Title from "../../components/Title";

// Imports from react-reveal package
import Slide from "react-reveal/Slide";

const ProjectsContainer = () => {
  const language = useContext(LanguageContext);

  const dimensions = useWindowDimensions();

  return (
    <div className="projects-container">
      {dimensions.windowWidth > 1023 ? (
        <Slide bottom effect="fadeInUp" duration={1000}>
          <Title text={language.projects.title} />
          <p className="intro">{language.projects.intro}</p>
        </Slide>
      ) : (
        <>
          <Title text={language.projects.title} />
          <p className="intro">{language.projects.intro}</p>
        </>
      )}

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
