import React, { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRecipe = {
      title,
      summary: "User added recipe",
      image: "https://via.placeholder.com/300",
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    try {
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok) {
        throw new Error("Failed to add recipe");
      }

      alert("✅ Recipe added successfully!");
      setTitle("");
      setIngredients("");
      setSteps("");
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong while adding the recipe.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a Recipe</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Enter recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded p-2"
          required
        />

        <textarea
          rows="5"
          placeholder="Enter ingredients (one per line)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border rounded p-2"
          required
        />

        <textarea
          rows="5"
          placeholder="Enter cooking steps (one per line)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border rounded p-2"
          required
        />

        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
