// scss
import "./App.scss";
// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import MessagesPage from "./pages/MessagePage/MessagesPage";
import NewMessagesPage from "./pages/NewMessagePage/NewMessagesPage";

function App() {
  const router = createBrowserRouter([
    // Messages Route...
    {
      path: "/",
      element: <MessagesPage />,
    },
    // New Messages Route...
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
