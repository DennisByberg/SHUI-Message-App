// Scss
import "./App.scss";
// React-Router-Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Pages
import MessagesPage from "./pages/MessagePage/MessagesPage";
import NewMessagesPage from "./pages/NewMessagePage/NewMessagesPage";

function App() {
  const router = createBrowserRouter([
    // Messages Page...
    {
      path: "/",
      element: <MessagesPage />,
    },
    // New Messages Page...
    {
      path: "/NewMessages",
      element: <NewMessagesPage />,
    },
  ]);

  return (
    <section className="App">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
