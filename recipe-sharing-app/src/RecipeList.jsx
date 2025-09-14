import { useRecipeStore } from "./recipeStore/recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </>
  );
}
