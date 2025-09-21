// import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const key = import.meta.env.VITE_GITHUB_KEY;
  console.log(key);
  return (
    <>
      <Search />
    </>
  );
}

export default App;
