// sass
import "./MessagesPage.scss";
// components
import Header from "../../components/Header/Header";
import MessageCard from "../../components/MessageCard/MessageCard";
import Footer from "../../components/Footer/Footer";
//react-redux
import { useSelector } from "react-redux";

function MessagesPage() {
  const { messages } = useSelector((state) => state.messages);

  const messagesComponents = messages.map((message) => {
    return (
      <MessageCard
        key={message.id}
        id={message.id}
        date={message.date}
        message={message.message}
        writer={message.writer}
      />
    );
  });

  return (
    <section className="messages-page">
      <Header />
      {messages.length ? (
        <ul className="messages-page__ul">{messagesComponents}</ul>
      ) : (
        <h3 className="messages-page__no-messages-text">
          Du har inga meddelanden att visa.
        </h3>
      )}
      <Footer />
    </section>
  );
}
export default MessagesPage;
