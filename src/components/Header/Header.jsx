// sass
import "./Header.scss";
// router
import { useNavigate } from "react-router-dom";
// PNG
import letterSPNG from "/src/assets/letter-s.png";
import messagePNG from "/src/assets/messages.png";

function Header() {
  const navigate = useNavigate(); // router

  return (
    <header className="header">
      <div className="header__banner-container">
        <img className="header__letter-s" src={letterSPNG} />
      </div>
      <div onClick={() => navigate("/")} className="header__banner-container">
        <img className="header__home-icon" src={messagePNG} />
      </div>
    </header>
  );
}
export default Header;
