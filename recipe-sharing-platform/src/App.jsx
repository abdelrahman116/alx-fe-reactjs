import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import NavBar from "./components/NavBar";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
      <NavBar className="z-10" />
      <main className="flex-1 p-4 sm:p-6 md:p-10 max-w-7xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes/:id" element={<RecipeDetail cl />} />
          <Route path="/form" element={<AddRecipeForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
