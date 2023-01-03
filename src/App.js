import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import EventLog from './pages/EventLog';

import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';

function App() {
  //* FOR LOADING */
  setTimeout(() => {
    document.body.setAttribute("class", "loaded");
  }, 1500);

  

  return (
    <div className="App">
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/eventlog" element={<EventLog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
