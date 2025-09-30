import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import NavBar from "./components/NavBar";

function App() {
  <style></style>;
  return (
    <body className="bg-green-50">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </body>
  );
}

export default App;
