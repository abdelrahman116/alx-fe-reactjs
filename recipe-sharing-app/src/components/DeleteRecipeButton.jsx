import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton() {
  const DeleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const recipes = useRecipeStore((state) => state.recipes);
  const lastRecipe = recipes[recipes.length - 1];

  const handleDelete = () => {
    if (lastRecipe && window.confirm("Delete the last recipe?")) {
      DeleteRecipe(lastRecipe.id);
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
