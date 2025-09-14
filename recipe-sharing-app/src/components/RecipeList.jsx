import { useRecipeStore } from "../Components/recipeStore";
import { Link } from "react-router-dom";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </>
  );
}
