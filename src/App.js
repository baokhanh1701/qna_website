import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import EventLog from './pages/EventLog';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';

export const userContext = createContext();

function App() {
  //* FOR LOADING */
  setTimeout(() => {
    document.body.setAttribute("class", "loaded");
  }, 250);

  const [username, setUserName] = useState("Guest");
  const [showButton, setShowButton] = useState(true);

  return (
    <userContext.Provider value={{ username, setUserName, showButton, setShowButton }}>
      <div className="App">
        <div id="loader-wrapper">
          <div id="loader"></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/eventlog" element={<EventLog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
