import DeleteRecipeButton from "./deleteRecipe";
import EditRecipeForm from "./EditRecipeForm";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../Components/recipeStore";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <EditRecipeForm />
      <DeleteRecipeButton />
    </div>
  );
}
