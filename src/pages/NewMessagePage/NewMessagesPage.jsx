// Scss
import "./NewMessagesPage.scss";
// Components
import Header from "../../components/Header/Header";
import NewMessageForm from "../../components/NewMessageForm/NewMessageForm";

function NewMessagesPage() {
  return (
    <section className="new-messages-page">
      <Header />
      <NewMessageForm />
    </section>
  );
}
export default NewMessagesPage;
