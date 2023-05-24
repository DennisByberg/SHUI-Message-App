// sass
import "./Footer.scss";
// router
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate(); // router.
  function newMessageClick() {
    navigate("/NewMessages");
  }

  return (
    <footer className="footer">
      <div onClick={newMessageClick} className="footer__new-message-container">
        <img className="footer__pencil" src="../src/assets/pencil.png" />
      </div>
    </footer>
  );
}
export default Footer;
