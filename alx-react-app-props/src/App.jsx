// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import { UserContext } from "./components/UserContext";
import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />

      <MainContent />
      <UserContext.Provider>
        <UserProfile
          name="Abdelrahman"
          age="22"
          bio="Loves Islam and Prograg ❤️"
        />
      </UserContext.Provider>

      <Footer />
    </>
  );
}

export default App;
