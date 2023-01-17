import { Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { NextUIProvider, createTheme, getDocumentTheme } from "@nextui-org/react";

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

  const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '$green200',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#4ADE7B',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',

        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',

        // you can also create your own color
        myColor: '#ff4ecd'

        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // you can use any storage
    let theme = window.localStorage.getItem('data-theme');
    setIsDark(theme === 'dark');

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === 'dark');
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : null}>
      <userContext.Provider value={{ username, setUserName, showButton, setShowButton, userLoggedIn, setUserLoggedIn, isDark, setIsDark }}>
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
    </NextUIProvider>
  );
}

export default App;
