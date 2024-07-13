import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/homePage";
import SignIn from "./components/signIn";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
