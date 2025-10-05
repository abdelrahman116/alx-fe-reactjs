import React, { useState, useEffect } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [recipes, setRecipes] = useState([]);

  // ✅ حالة الأخطاء
  const [errors, setErrors] = useState({});

  // preview للصور
  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  // ✅ دالة التحقق
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "العنوان مطلوب";
    if (!ingredients.trim()) newErrors.ingredients = "المقادير مطلوبة";
    if (!steps.trim()) newErrors.steps = "خطوات الطبخ مطلوبة";
    if (!file) newErrors.file = "الصورة مطلوبة";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // ✅ تحقق قبل الحفظ
    if (!validate()) {
      alert("❌ يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary: "User added recipe",
      image: preview || "https://via.placeholder.com/300",
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    setRecipes((prev) => [...prev, newRecipe]);
    alert("✅ تم إضافة الوصفة بنجاح (لن تحفظ بعد التحديث)");

    // reset
    setTitle("");
    setIngredients("");
    setSteps("");
    setFile(null);
    setPreview(null);
    setErrors({});
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 md:text-center">إضافة وصفة</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg mx-auto"
      >
        <input
          type="text"
          placeholder="عنوان الوصفة"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`border rounded p-2 ${
            errors.title ? "border-red-500" : ""
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <textarea
          rows="5"
          placeholder="المقادير (كل سطر مقدار)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`border rounded p-2 ${
            errors.ingredients ? "border-red-500" : ""
          }`}
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}

        <textarea
          rows="5"
          placeholder="خطوات الطبخ (كل سطر خطوة)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={`border rounded p-2 ${
            errors.steps ? "border-red-500" : ""
          }`}
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className={`border p-2 rounded ${
            errors.file ? "border-red-500" : ""
          }`}
        />
        {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-full h-40 object-cover rounded-lg"
          />
        )}

        <button
          type="submit"
          className="bg-green-500   text-white py-2 px-4 rounded hover:bg-green-600"
        >
          إضافة الوصفة
        </button>
      </form>

      {/* ✅ عرض الوصفات */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2 md:text-center">
          الوصفات (مؤقتة)
        </h2>
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
