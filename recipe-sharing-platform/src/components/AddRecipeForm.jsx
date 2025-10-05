// import React, { useState, useEffect } from "react";

// export default function AddRecipeForm() {
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [steps, setSteps] = useState("");
//   const [preview, setPreview] = useState(null);
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     if (!file) return;
//     const url = URL.createObjectURL(file);
//     setPreview(url);
//     return () => URL.revokeObjectURL(url);
//   }, [file]);
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const newRecipe = {
//       title,
//       summary: "User added recipe",
//       image: "https://via.placeholder.com/300",
//       ingredients: ingredients.split("\n"),
//       instructions: steps.split("\n"),
//       url: null,
//     };

//     try {
//       const response = await fetch("http://localhost:5000", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newRecipe),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add recipe");
//       }

//       alert("✅ Recipe added successfully!");
//       setTitle("");
//       setFile(null);

//       setPreview(null);
//       setIngredients("");
//       setSteps("");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("❌ Something went wrong while adding the recipe.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Add a Recipe</h1>

//       <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
//         <input
//           type="text"
//           placeholder="Enter recipe title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="border rounded p-2"
//           required
//         />

//         <textarea
//           rows="5"
//           placeholder="Enter ingredients (one per line)"
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           className="border rounded p-2"
//           required
//         />

//         <textarea
//           rows="5"
//           placeholder="Enter cooking steps (one per line)"
//           value={steps}
//           onChange={(e) => setSteps(e.target.value)}
//           className="border rounded p-2"
//           required
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files[0])}
//           className="border p-2 rounded"
//         />
//         {preview && (
//           <img
//             src={preview}
//             alt="preview"
//             className="w-full h-40 object-cover rounded-lg"
//           />
//         )}
//         <button
//           type="submit"
//           className="bg-green-500 hover:cursor-pointer text-white py-2 px-4 rounded hover:bg-green-600"
//         >
//           Add Recipe
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [recipes, setRecipes] = useState([]); // store recipes in memory

  // Create preview from selected file
  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Date.now(),
      title,
      summary: "User added recipe",
      image: preview || "https://via.placeholder.com/300",
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    setRecipes((prev) => [...prev, newRecipe]);

    alert("✅ Recipe added successfully (not saved permanently)!");

    // reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg mx-auto"
      >
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

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2 rounded"
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 object-cover rounded-lg"
          />
        )}

        <button
          type="submit"
          className="bg-green-500 hover:cursor-pointer text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Add Recipe
        </button>
      </form>

      {/* Show added recipes */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Recipes (temporary)</h2>
        {recipes.map((r) => (
          <div
            key={r.id}
            className="border rounded p-3 mb-3 bg-green-50 shadow"
          >
            <h3 className="font-bold">{r.title}</h3>
            <img
              src={r.image}
              alt={r.title}
              className="w-full h-40 object-cover rounded-lg mt-2"
            />
            <p className="text-sm opacity-80">{r.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
