import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import NavBar from "./components/NavBar";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div className="bg-green-50 min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/form" element={<AddRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
