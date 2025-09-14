import "./App.css";
import AddRecipeForm from "./Components/AddRecipeForm";
import RecipeList from "./Components/RecipeList";

function App() {
  return (
    <div>
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;
