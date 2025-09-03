// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />

      <MainContent />
      <UserProfile
        name="Abdelrahman"
        age="22"
        bio="Loves Islam and Programming ❤️"
      />
      <Counter />

      <Footer />
    </>
  );
}

export default App;
