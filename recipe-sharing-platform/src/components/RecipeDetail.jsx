import { useParams } from "react-router-dom";
import data from "../data.json";
// import { useEffect, useState } from "react";
export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === parseInt(id));

  if (!recipe) {
    return <h2 className="text-red-500 text-center">Recipe not found!</h2>;
  }

  return (
    <div className=" bg-green-100 p-6 w-full mx-auto">
      <div className="ml-100">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="  hover:scale-110 duration-300 ease-in-out w-fit h-64 object-cover rounded-lg mb-4 shadow "
        />
        <p className="mb-4">{recipe.summary}</p>

        <h2 className="text-xl font-semibold mb-6">Ingredients</h2>
        <ul className="list-disc pl-6 mb-6">
          {recipe.ingredients?.map((req, i) => (
            <div>
              <li className=" list-none mb-3" key={i}>
                <span className="text-2xl rounded-4xl bg-green-300 text-white font-bold px-1.5 py-1">
                  {i + 1}
                </span>{" "}
                <span className="font-bold"> {req}</span>
              </li>
            </div>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-6">Instructions</h2>
        <ol className="list-decimal pl-6">
          {recipe.instructions?.map((step, i) => (
            <li className=" list-none mb-3" key={i}>
              <span className="text-2xl rounded-4xl bg-green-300 text-white font-bold px-1.5 py-1">
                Step {i + 1}
              </span>{" "}
              <span className="font-bold"> {step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
