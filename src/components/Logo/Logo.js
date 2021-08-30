import "./Logo.scss";

import logo from "../../utils/images/logo.svg";

const Logo = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return <img src={logo} onClick={refreshPage} className="logo" />;
};

export default Logo;
