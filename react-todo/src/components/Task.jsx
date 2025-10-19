export default function Task({
  name,
  description,
  time,
  state,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-2xl p-4 mb-3 border border-gray-100">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-xs text-gray-400">⏰ {time}</p>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            state === "done"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {state}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ✏️ Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
