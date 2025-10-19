// src/components/Task.jsx
export default function Task({
  id,
  name,
  description,
  time,
  state,
  onToggle,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className={`p-4 border rounded-lg shadow-md flex flex-col gap-2 ${
        state ? "bg-green-100" : "bg-white"
      }`}
    >
      <h3
        className={`text-lg font-semibold ${
          state ? "line-through text-gray-500" : ""
        }`}
      >
        {name}
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400">{time}</p>

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onToggle(id)}
          className={`px-3 py-1 text-sm rounded ${
            state ? "bg-yellow-400" : "bg-green-400"
          } text-white`}
        >
          {state ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onEdit(id)}
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(id)}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
