// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import React, { useState } from "react";

import UserProfile from "./components/UserProfile";
// import { UserContext } from "./components/UserContext";
import "./App.css";
import UserDetails from "./components/UserDetails";
import { UserContext } from "./components/UserContext";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider value={(name, setName, email, setEmail)}>
      <WelcomeMessage />
      <Header />

      <MainContent />
      <UserProfile
        name="Abdelrahman"
        age="22"
        bio="Loves Islam and Prograg ❤️"
      />

      <Footer />
    </UserContext.Provider>
  );
}

export default App;
