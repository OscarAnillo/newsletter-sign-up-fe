import { useState } from "react";
import { NewsLetter } from "./Components/News-letter";
import "./App.css";

function App() {
  const [emailInput, setEmailInput] = useState({ email: "" });
  const [formError, setFormError] = useState({});

  return (
    <div className="app">
      <NewsLetter
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        formError={formError}
        setFormError={setFormError}
      />
    </div>
  );
}

export default App;
