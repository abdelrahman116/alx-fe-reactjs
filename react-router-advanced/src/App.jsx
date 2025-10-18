import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile />
    </>
  );
}

export default App;
