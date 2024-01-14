import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState();

  return currentUser ? (
    <FeedPage currentUser={currentUser} />
  ) : (
    <LoginPage setCurrentUser={setCurrentUser} />
  );
}

export default App;
