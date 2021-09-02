import "./Logo.scss";

// Images
import logo from "../../utils/images/logo.svg";

const Logo = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <img
      src={logo}
      onClick={refreshPage}
      className="logo"
      alt="Corinne Pradier"
    />
  );
};

export default Logo;
