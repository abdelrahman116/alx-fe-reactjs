import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

export default function DeleteRecipeButton() {
  const DeleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const recipes = useRecipeStore((state) => state.recipes);
  const lastRecipe = recipes[recipes.length - 1];
  const navigate = useNavigate();

  const handleDelete = () => {
    if (lastRecipe && window.confirm("Delete the last recipe?")) {
      DeleteRecipe(lastRecipe.id);
      navigate("/");
    }
  };
  return (
    <div>
      <button disabled={!lastRecipe} onClick={handleDelete}>
        Delete Last Recipe
      </button>
    </div>
  );
}
