// sass
import "./Header.scss";
// router
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__banner-container">
        <img className="header__letter-s" src="../src/assets/letter-s.png" />
      </div>
      <div onClick={() => navigate("/")} className="header__banner-container">
        <img className="header__home-icon" src="../src/assets/messages.png" />
      </div>
    </header>
  );
}
export default Header;
