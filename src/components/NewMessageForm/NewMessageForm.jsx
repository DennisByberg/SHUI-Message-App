// react
import { useState } from "react";
// sass
import "./NewMessageForm.scss";
// Random ID
import { v4 as uuidv4 } from "uuid";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addNewMessageToMessageStack } from "../../redux/messages";

function NewMessageForm() {
  const [username, setUsername] = useState();
  const [messageInput, setMessageInput] = useState();

  const dispatch = useDispatch(); // redux...

  // GET DATE FUNCTION
  function getDate() {
    const currentDate = new Date();

    // Get day of the week
    const daysOfWeek = [
      "söndag",
      "måndag",
      "tisdag",
      "onsdag",
      "torsdag",
      "fredag",
      "lördag",
    ];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Get day
    const dayOfMonth = currentDate.getDate();

    // Get month
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Maj",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ];
    const month = months[currentDate.getMonth()];

    // Get hours
    const hours = currentDate.getHours();

    // Get minutes
    const minutes = currentDate.getMinutes();

    // TODO: get better with like: 01: 01 the 0...
    const dateString = `${dayOfWeek} ${dayOfMonth} ${month}, ${
      hours < 10 ? `0${hours}` : hours
    }:${minutes < 10 ? `0${minutes}` : minutes}`;

    return dateString;
  }

  function submitForm() {
    const newMessage = {
      id: uuidv4(),
      message: messageInput,
      writer: username,
      date: getDate(),
    };

    // Pusha in newMessage till messages array...
    dispatch(addNewMessageToMessageStack(newMessage));
  }

  return (
    <section className="new-message-form">
      <div className="new-message-form__message-container">
        <textarea
          onChange={(event) => {
            setMessageInput(event.target.value);
          }}
          className="new-message-form__message-input"
        />
        <img className="new-message-form__end" src="../src/assets/end.png" />
      </div>
      <input
        placeholder="Användarnamn"
        onChange={(event) => setUsername(event.target.value)}
        className="new-message-form__writer-input"
        type="text"
      />
      <button onClick={submitForm} className="new-message-form__add-button">
        Publicera
      </button>
    </section>
  );
}
export default NewMessageForm;
