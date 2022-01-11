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
    setTimeout(() => {
      setLine1(1);
    }, 1000);

    setTimeout(() => {
      setLine1(2);
    }, 3000);

    setTimeout(() => {
      setLine2(1);
    }, 3000);

    setTimeout(() => {
      setDisplayAnimation(false);
    }, 6000);
  }, [setDisplayAnimation]);

  const skipAnimation = () => {
    setDisplayAnimation(false);
  };

  return (
    <div className="terminal-animation-container">
      <div>
        <div className="command-line-interface">
          <div className="top-interface">
            <div className="circle red"></div>
            <div className="circle yellow"></div>
            <div className="circle green"></div>
          </div>

          <div className="texts">
            <p className="first-line">&nbsp;~/Corinne_Pradier/Portfolio</p>

            {line1 === 0 ? null : (
              <div
                className={
                  line1 === 1 ? "typewriter animation-1" : "typewriter"
                }
              >
                <p>&nbsp;&rsaquo; Welcome, visitor 👋.</p>
              </div>
            )}

            {line2 === 0 ? null : (
              <div
                className={
                  line2 === 1 ? "typewriter animation-2" : "typewriter"
                }
              >
                <p>&nbsp;&rsaquo; Please wait while loading content...</p>
              </div>
            )}
          </div>
        </div>

        <div className="skip-button" onClick={skipAnimation}>
          <p>Skip</p>
        </div>
      </div>
    </div>
  );
};

export default TerminalAnimation;
