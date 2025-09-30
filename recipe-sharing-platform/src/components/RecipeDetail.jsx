import { useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <h2 className="text-red-500 text-center">Recipe not found!</h2>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="mb-4">{recipe.summary}</p>

      <h2 className="text-xl font-semibold mb-2">Requirements</h2>
      <ul className="list-disc pl-6 mb-6">
        {recipe.requirements?.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Steps</h2>
      <ol className="list-decimal pl-6">
        {recipe.steps?.map((step, i) => (
          <li key={i} className="mb-2">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
