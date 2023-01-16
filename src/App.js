import { Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import axios from "axios";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import EventLog from './pages/EventLog';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';
import EventInfo from "./pages/EventInfo";

export const userContext = createContext();

function App() {
  //* FOR LOADING */
  setTimeout(() => {
    document.body.setAttribute("class", "loaded");
  }, 250);

  const [username, setUserName] = useState("Guest");
  const [showButton, setShowButton] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userLoggedIn");
    if (loggedInUser) {
      // const foundUser = JSON.parse(loggedInUser);
      // setUser(foundUser);
      console.log(loggedInUser);
      console.log(userLoggedIn);
      setUserLoggedIn(loggedInUser);
      setShowButton(false);
    }
  }, []);

  return (
    <userContext.Provider value={{ username, setUserName, showButton, setShowButton, userLoggedIn, setUserLoggedIn }}>
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
          <Route path="/eventlog/event/:id" element={<EventInfo />} />
        </Routes>
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
