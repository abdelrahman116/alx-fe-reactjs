// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import Main from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />

      <Main />

      <Footer />
    </>
  );
}

export default App;
