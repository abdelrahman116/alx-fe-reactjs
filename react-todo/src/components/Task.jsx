export default function Task({ name, description, state, onToggle }) {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded-lg shadow-sm border ${
        state ? "bg-green-100" : "bg-white"
      }`}
    >
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <button
        onClick={onToggle}
        className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
      >
        {state ? "Done ✅" : "Pending ⏳"}
      </button>
    </div>
  );
}
