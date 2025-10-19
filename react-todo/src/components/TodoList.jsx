import { useState } from "react";
import Task from "./Task";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const handleDelete = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const handleEdit = (id) => {
    const editedName = prompt("Edit task name:");
    if (editedName)
      setTasks(
        tasks.map((t) => (t.id === id ? { ...t, name: editedName } : t))
      );
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-gray-50 p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">📝 To-Do List</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg mb-5 hover:bg-blue-700 transition"
      >
        ➕ Add Task
      </button>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onEdit={() => handleEdit(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))
      )}

      <AddTodoForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTask}
      />
    </div>
  );
}
