import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import EventLog from './pages/EventLog';
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';

// import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './api/firebase';


function App() {
  //* FOR LOADING */
  setTimeout(() => {
    document.body.setAttribute("class", "loaded");
  }, 250);

  return (
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
  );
}

export default App;
