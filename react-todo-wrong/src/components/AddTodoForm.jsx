import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      onAdd({ name, description });
      setName("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Enter task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-3 py-1 rounded-md"
      >
        Add Task
      </button>
    </form>
  );
}
