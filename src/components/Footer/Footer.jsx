// sass
import "./Footer.scss";
// router
import { useNavigate } from "react-router-dom";
// PNG
import pencilIMG from "/src/assets/pencil.png";

function Footer() {
  const navigate = useNavigate(); // router.

  function newMessageClick() {
    navigate("/NewMessages");
  }

  return (
    <footer className="footer">
      <div onClick={newMessageClick} className="footer__new-message-container">
        <img className="footer__pencil" src={pencilIMG} />
      </div>
    </footer>
  );
}
export default Footer;
