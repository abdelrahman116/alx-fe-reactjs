import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./Components/AddRecipeForm";
import RecipeList from "./Components/RecipeList";
import DeleteRecipe from "./Components/DeleteRecipeButton";
import RecipeDetails from "./Components/RecipeDetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>

        <RecipeList />
        <AddRecipeForm />
        <DeleteRecipe />
      </div>
    </Router>
  );
}

export default App;
