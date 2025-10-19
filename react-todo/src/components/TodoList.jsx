import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Fix the sensor wiring",
      description:
        "Reconnect loose wires and test the circuit with multimeter.",
      status: "pending",
    },
    {
      id: 2,
      name: "Build login page UI",
      description: "Use Tailwind components to design the login form.",
      status: "in progress",
    },
    {
      id: 3,
      name: "Write test cases for TodoList",
      description: "Add unit tests using Jest and React Testing Library.",
      status: "pending",
    },
    {
      id: 4,
      name: "Review React Hooks notes",
      description: "Revise useState, useEffect, and useContext concepts.",
      status: "done",
    },
    {
      id: 5,
      name: "Submit project report",
      description: "Upload the final documentation to GitHub and Netlify.",
      status: "pending",
    },
  ]);

  const addTask = (newTask) =>
    setTasks([...tasks, { ...newTask, id: Date.now(), status: "pending" }]);
  const toggleStatus = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "done" ? "pending" : "done" }
          : task
      )
    );
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <AddTodoForm onAdd={addTask} />
      <div className="flex flex-col gap-3 mt-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center p-3 rounded-lg shadow-sm border ${
              task.status === "done" ? "bg-green-100" : "bg-white"
            }`}
          >
            <div>
              <h3 className="font-semibold">{task.name}</h3>
              <p className="text-gray-600 text-sm">{task.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleStatus(task.id)}
                className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                {task.status === "done" ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Task({ name, description, state, onToggle }) {
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
