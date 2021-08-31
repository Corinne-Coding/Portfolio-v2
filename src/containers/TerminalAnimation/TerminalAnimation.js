import "./TerminalAnimation.scss";

import { useState, useEffect } from "react";

const TerminalAnimation = ({ setDisplayAnimation }) => {
  /* 
  States :
  0 : line is not displayed
  1 : line is displayed with animation
  2 : line is displayed without animation
  */
  const [line1, setLine1] = useState(0);
  const [line2, setLine2] = useState(0);

  useEffect(() => {
    const launchAnimation1 = () => {
      setLine1(1);
    };

    const stopAnimation1 = () => {
      setLine1(2);
    };

    const launchAnimation2 = () => {
      setLine2(1);
    };

    setTimeout(() => {
      launchAnimation1();
    }, 1000);

    setTimeout(() => {
      stopAnimation1();
    }, 3000);

    setTimeout(() => {
      launchAnimation2();
    }, 3000);

    setTimeout(() => {
      setDisplayAnimation(false);
    }, 7500);
  }, []);

  return (
    <div className="terminal-animation-container">
      <div className="command-line-interface">
        <div className="up-interface">
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
        </div>

        <div className="texts">
          <p className="first-line">&nbsp;~/Corinne_Pradier/Portfolio</p>

          {line1 === 0 ? null : line1 === 1 ? (
            <div className="typewriter animation-1">
              <p>&nbsp;&rsaquo; Welcome, visitor 👋.</p>
            </div>
          ) : (
            <div className="typewriter">
              <p>&nbsp;&rsaquo; Welcome, visitor 👋.</p>
            </div>
          )}

          {line2 === 0 ? null : line2 === 1 ? (
            <div className="typewriter animation-2">
              <p>&nbsp;&rsaquo; Please wait while loading content...</p>
            </div>
          ) : (
            <div className="typewriter">
              <p>&nbsp;&rsaquo; Please wait while loading content...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalAnimation;
