import "./MessageCard.scss";
import { deleteMessageFromMessageStack } from "../../redux/messages";
import { useDispatch } from "react-redux";

function MessageCard({ message, writer, date, id }) {
  const dispatch = useDispatch(); // redux

  function deleteMessage(e) {
    e.stopPropagation();
    dispatch(deleteMessageFromMessageStack(id));
  }

  return (
    <li className="message-card">
      <img
        onClick={deleteMessage}
        className="message-card__trash"
        src="../src/assets/trash.png"
      />
      <p className="message-card__date">{date}</p>
      <p className="message-card__message">{message}</p>
      <div className="message-card__writer-container">
        <img className="message-card__line" src="../src/assets/line.png" />
        <p className="message-card__writer">{writer}</p>
      </div>
      <img className="message-card__end" src="../src/assets/end.png" />
    </li>
  );
}
export default MessageCard;
